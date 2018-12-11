// eslint-disable-next-line no-undef
const GitHub = require('github-api');
// eslint-disable-next-line no-undef
var azure = require('azure-storage');
// eslint-disable-next-line no-undef
const { GitHubDataLoader } = require('../Utils/GitHubDataLoader');

const gitHub = new GitHub({
    // eslint-disable-next-line no-undef
    token: process.env['GITHUB_API_KEY']
});


const appendRecord = async (batch, key, loadData) => {
    batch.insertOrReplaceEntity({
        PartitionKey: { '_': 'gitHubData' },
        RowKey: { '_': key },
        value: { '_': JSON.stringify(await loadData()) }
    });
}

// eslint-disable-next-line no-undef
module.exports = async (context, myTimer) => {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue) {
        context.log('JavaScript is running late!');
    }
    
    context.log('JavaScript timer triggers function ran!', timeStamp);
    
    const dataLoader = new GitHubDataLoader(gitHub);
    const batch = new azure.TableBatch();
    await appendRecord(batch, 'openSourceProjectCount', dataLoader.getKenticoOpenSourceProjectsCount.bind(dataLoader));
    await appendRecord(batch, 'openedGroomedIssues', dataLoader.getKenticoOpenedGroomedIssues.bind(dataLoader));
    await appendRecord(batch, 'openedGroomedIssuesByPlatform', dataLoader.getKenticoOpenedIssuesByPlatform.bind(dataLoader));
    await appendRecord(batch, 'mergePullRequestsCount', dataLoader.getKenticoMergedPullRequestCount.bind(dataLoader));
    await appendRecord(batch, 'contributorsCount', dataLoader.getKenticoContributorsCount.bind(dataLoader));
    await appendRecord(batch, 'topThreeStarredRepos', dataLoader.getKenticoCloudTopThreeStaredRepos.bind(dataLoader));
    await appendRecord(batch, 'topThreeContributors', dataLoader.getKenticoTopThreeContributors.bind(dataLoader));

    // eslint-disable-next-line no-undef
    const tableSvc = azure.createTableService(process.env.AzureWebJobsStorage);
    tableSvc.createTableIfNotExists('githubStatus', (error, result, response) => {
        if (!error) {
            context.log('Store result: ' + JSON.stringify(result));
            context.log('Store response: ' + JSON.stringify(response));
            tableSvc.executeBatch('githubStatus', batch, (error, result, response) => {
                if (!error) {
                    context.log('Insert result: ' + JSON.stringify(result));
                    context.log('Insert response: ' + JSON.stringify(response));
                }
                context.log('Insert error: ' + JSON.stringify(error));
            });
        }
        context.log('Store error: ' + JSON.stringify(error));
    });
};

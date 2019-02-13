import { createTableService, TableQuery } from './azure-storage.table.min'

const tableService = createTableService('DefaultEndpointsProtocol=https;AccountName=communitypagegithubdata;AccountKey=+Lj4+s9CtKw9LGhT/EGiwUGGfmRoCgDMjEhsKAiGSkveOzJQQCrlOpbwD+JVvvClTt/19OwMRgfARxo7Lo1Kmw==;EndpointSuffix=core.windows.net');

const getAllGithubData = (callback) => {
  const query = new TableQuery()
    .where('PartitionKey eq ?', 'gitHubData');
  tableService.queryEntities('githubStatus', query, null, callback);
}

export {
  getAllGithubData
};
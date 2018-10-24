/* eslint-disable */
import GitHub from 'github-api';
import atob from 'atob';

const gitHub = new GitHub({
  token: atob("N2E2NzJiOGExOTFlZWYwMmE0NmEyOTU2ZjJkM2U4ZDMyM2ViZDZmYQ==")
});

const getKenticoPublicRepos = async () => {
  const kentico = gitHub.getOrganization('Kentico');
  const repos = await kentico.getRepos();
  return repos.data.filter(repo => repo.private === false);
}

const getKenticoOpenSourceProjectsCount = async () => {
  const publicRepos = await getKenticoPublicRepos();
  return publicRepos.length;
}

const getKenticoMemberLogins = async () => {
  let options = {
    per_page: '100',
    page: '1'
  };

  const kentico = gitHub.getOrganization('Kentico');
  const members1 = await kentico.listMembers(options);
  options.page = 2;
  const members2 = await kentico.listMembers(options);

  return members1.data.map(member => member.login).concat(
    members2.data.map(member => member.login)
  );
}

const getKenticoMergedPullRequestCount = async () => {
  let options;
  let search = gitHub.search({
    q: 'org:Kentico type:pr is:merged is:public',
    sort: 'created',
    order: 'asc'
  });

  const mergedPullRequests = await search.forIssues(options);
  return mergedPullRequests.data.length;
}

const getKenticoContributorsCount = async () => {
  const publicRepos = await getKenticoPublicRepos();
  const contributorsSet = new Set();
  const contributorsPromises = publicRepos
    .map(repo => gitHub
      .getRepo(repo.owner.login, repo.name)
      .getContributors());

  const contributorsPerProject = await Promise.all(contributorsPromises);
  contributorsPerProject.forEach(contributor => {
    contributor.data
      .map(contributor => contributor.login)
      .forEach(contributorLogin => {
        contributorsSet.add(contributorLogin);
      });
  });
  return contributorsSet.size;
};


const getKenticoCloudTopThreeStaredRepos = async () => { // maximum is 1000
  let options;
  let search = gitHub.search({
    q: 'org:Kentico is:public fork:true topic:kentico-cloud',
    sort: 'stars',
    order: 'desc'
  });

  const topStarredRepositories = await search.forRepositories(options);
  return topStarredRepositories.data.slice(0, 3);
}

const getKenticoTopThreeContributors = async () => {
  const ignoreList = ['desana', 'ondrejsevcik'];
  const kenticoMemberLogins = (await getKenticoMemberLogins())
    .concat(ignoreList);
  const publicRepos = await getKenticoPublicRepos();
  const contributors = {};
  const contributorsPromises = publicRepos
    .map(repo => gitHub
      .getRepo(repo.owner.login, repo.name)
      .getContributors());

  const contributorsPerProject = await Promise.all(contributorsPromises);

  contributorsPerProject.forEach(projectContributors => {
    for (const contributor of projectContributors.data) {
      if (kenticoMemberLogins.includes(contributor.login)) {
        continue;
      }

      if (contributors[contributor.login]) {
        contributors[contributor.login].totalContributions += contributor.contributions;
      }
      else {
        contributors[contributor.login] = {
          totalContributions: contributor.contributions,
          contributorInfo: {
            ...contributor
          }
        }
      }
    }
  });

  return Object.values(contributors)
    .sort((a, b) => b.totalContributions - a.totalContributions)
    .slice(0, 3);
}

const getKenticoOpenedGroomedIssues = async (platform) => {
  let options;
  let search = gitHub.search({
    q: `org:Kentico type:issue is:public label:groomed state:open no:assignee language:${platform}`,
    sort: 'updated',
    order: 'desc'
  });

  const topIssues = await search.forIssues(options);
  return topIssues.data.slice(0, 3);
}

export {
  getKenticoOpenSourceProjectsCount,
  getKenticoMergedPullRequestCount,
  getKenticoContributorsCount,
  getKenticoCloudTopThreeStaredRepos,
  getKenticoTopThreeContributors,
  getKenticoOpenedGroomedIssues
}
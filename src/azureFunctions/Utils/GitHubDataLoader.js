// eslint-disable-next-line no-undef
const axios = require('axios');

class GitHubDataLoader {
  constructor(gitHub) {
    this.gitHub = gitHub;
  }

  async getKenticoPublicRepos() {
    const kentico = this.gitHub.getOrganization('Kentico');
    const repos = await kentico.getRepos();
    return repos.data.filter(repo => repo.private === false);
  }

  async getKenticoOpenSourceProjectsCount() {
    const publicRepos = await this.getKenticoPublicRepos();
    return publicRepos.length;
  }

  async getKenticoMemberLogins() {
    let options = {
      per_page: '100',
      page: '1'
    };

    const kentico = this.gitHub.getOrganization('Kentico');
    const members1 = await kentico.listMembers(options);
    options.page = 2;
    const members2 = await kentico.listMembers(options);

    return members1.data.map(member => member.login).concat(
      members2.data.map(member => member.login)
    );
  }

  async getKenticoMergedPullRequestCount() {
    let options;
    let search = this.gitHub.search({
      q: 'org:Kentico type:pr is:merged is:public',
      sort: 'created',
      order: 'asc'
    });

    const mergedPullRequests = await search.forIssues(options);
    return mergedPullRequests.data.length;
  }

  async getKenticoContributorsCount() {
    const publicRepos = await this.getKenticoPublicRepos();
    // eslint-disable-next-line no-undef
    const contributorsSet = new Set();
    const contributorsPromises = publicRepos
      .map(repo => this.gitHub
        .getRepo(repo.owner.login, repo.name)
        .getContributors());

    // eslint-disable-next-line no-undef
    const contributorsPerProject = await Promise.all(contributorsPromises);
    contributorsPerProject.forEach(contributor => {
      contributor.data
        .map(contributor => contributor.login)
        .forEach(contributorLogin => {
          contributorsSet.add(contributorLogin);
        });
    });
    return contributorsSet.size;
  }

  async getKenticoCloudTopThreeStaredRepos() { // maximum is 1000
    let options;
    let search = this.gitHub.search({
      q: 'org:Kentico is:public topic:kentico-cloud',
      sort: 'stars',
      order: 'desc'
    });

    const topStarredRepositories = await search.forRepositories(options);
    return topStarredRepositories.data.slice(0, 3);
  }

  async getKenticoTopThreeContributors() {
    const ignoreList = ['desana', 'ondrejsevcik'];
    const kenticoMemberLogins = (await this.getKenticoMemberLogins())
      .concat(ignoreList);
    const publicRepos = await this.getKenticoPublicRepos();
    const contributors = {};
    const contributorsPromises = publicRepos
      .map(repo => this.gitHub
        .getRepo(repo.owner.login, repo.name)
        .getContributors());

    // eslint-disable-next-line no-undef
    const contributorsPerProject = await Promise.all(contributorsPromises);

    for (const projectContributors of contributorsPerProject) {
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
    }

    return Object.values(contributors)
      .sort((a, b) => b.totalContributions - a.totalContributions)
      .slice(0, 3);
  }

  async getKenticoOpenedGroomedIssues(platform) {
    let options;
    let search = this.gitHub.search({
      q: `org:Kentico type:issue is:public label:groomed state:open no:assignee language:${platform}`,
      sort: 'updated',
      order: 'desc'
    });

    const topIssues = await search.forIssues(options);
    return topIssues.data.slice(0, 3).map(issue => ({ 
      id: issue.id, 
      html_url: issue.html_url, 
      user: issue.user, 
      title: issue.title,
      repository_url: issue.repository_url 
    }));
  }

  async getKenticoOpenedIssuesByPlatform() {
    const platforms = await axios("https://deliver.kenticocloud.com/1bb2313f-2550-0025-06d9-f3e5065607c0/items?system.type=label&elements.label_group[contains]=platform")
      .then(result => (result.data.items.map(platform => platform.elements.codename.value)));

    let data = {
      all: await this.getKenticoOpenedGroomedIssues()
    };

    for (const platform of platforms) {
      data[platform] = await this.getKenticoOpenedGroomedIssues(platform);
    }

    return data;
  }
}

// eslint-disable-next-line no-undef
module.exports = {
  GitHubDataLoader
};
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
    const kentico = this.gitHub.getOrganization('Kentico');
    const members = await kentico._requestAllPages(`/orgs/${kentico.__name}/members`, undefined, undefined);

    return members.data.map(member => member.login)
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
    const contributorsPromises = publicRepos
      .map(repo => this.gitHub
        .getRepo(repo.owner.login, repo.name)
        .getContributors());
    const contributorsSet = await this.transformToContributorsSet(contributorsPromises);
    return contributorsSet.size;
  }

  async transformToContributorsSet(contributorsPromises) {
    // eslint-disable-next-line no-undef
    const contributorsSet = new Set();
    // eslint-disable-next-line no-undef
    const contributorsPerProject = await Promise.all(contributorsPromises);
    contributorsPerProject.forEach(contributor => {
      contributor.data
        .map(contributor => contributor.login)
        .forEach(contributorLogin => {
          contributorsSet.add(contributorLogin);
        });
    });
    return contributorsSet;
  }

  async getKenticoKontentTopThreeStaredRepos() { // maximum is 1000
    let options;
    let search = this.gitHub.search({
      q: 'org:Kentico is:public topic:kentico-kontent',
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

  async getTopThreeKenticoContentBacklogTodoCards() {
    const project = this.gitHub.getProject(2167772);
    const cards = await project.listColumnCards(4409236);

    const topThreeCards = cards.data
      .slice(0, 3);

    const resultIssues = [];
    for (const card of topThreeCards) {
      const contentUrlParts = card.content_url.split('/');
      const owner = contentUrlParts[contentUrlParts.length - 4];
      const repoName = contentUrlParts[contentUrlParts.length - 3];
      const issueNumber = contentUrlParts[contentUrlParts.length - 1];
      const issues = this.gitHub.getIssues(owner, repoName);
      const issue = await issues.getIssue(issueNumber);
      resultIssues.push({
        id: issue.data.id,
        html_url: issue.data.html_url,
        user: issue.data.user,
        title: issue.data.title,
        repository_url: issue.data.repository_url
      });
    }
    return resultIssues;
  }

  async getKenticoOpenedIssuesByPlatform() {
    const platforms = await axios("https://deliver.kontent.ai/1bb2313f-2550-0025-06d9-f3e5065607c0/items?system.type=label&elements.label_group[contains]=platform")
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

module.exports = {
  GitHubDataLoader
};
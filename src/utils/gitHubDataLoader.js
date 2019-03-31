import { createTableService, TableQuery } from './azure-storage.table.min'
import { azureTablesConnectionString } from './config.json';

const tableService = createTableService(azureTablesConnectionString);

const getAllGithubData = (callback) => {
  const query = new TableQuery()
    .where('PartitionKey eq ?', 'gitHubData');
  tableService.queryEntities('githubStatus', query, null, callback);
}

export {
  getAllGithubData
};
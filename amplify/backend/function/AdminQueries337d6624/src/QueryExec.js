const AWS = require("aws-sdk");

const dataService = new AWS.RDSDataService();
const config = require("./DatabaseConfig.json");

module.exports = (sql) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await dataService
        .executeStatement({ ...config, sql })
        .promise();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

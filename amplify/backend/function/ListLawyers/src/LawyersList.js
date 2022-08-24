var AWS = require("aws-sdk");
var Lawyer = require("./Lawyer");

AWS.config.update({
  region: process.env.AWS_REGION,
});

var ddb = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
});

var params = {
  TableName: "LAWYERS",
};

function formatLawyersItem({ id, name }) {
  return {
    id: id.S,
    name: name.S,
  };
}

class LawyersList {
  constructor(type) {
    this.type = type;
  }

  async createLawyer(lawyer) {
    try {
      const lawyerItem = new Lawyer(lawyer);
      await ddb
        .putItem({
          ...params,
          Item: lawyerItem,
        })
        .promise();
    } catch (err) {
      console.log(err);
      throw new err();
    }
  }

  async getLawyersList() {
    let lawyers = await ddb.scan(params).promise();
    lawyers = lawyers.Items.map(formatLawyersItem);
    return lawyers;
  }
}

module.exports = LawyersList;

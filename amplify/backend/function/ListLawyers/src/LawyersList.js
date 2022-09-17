var {Lawyer, ViewLawyer} = require("./Lawyer");
var queryExec = require("./QueryExec");

class LawyersList {
  constructor(type) {
    this.type = type;
  }

  async getLawyersList() {
    let sql = `SELECT * FROM AdvoLawyers WHERE lawyerType = '${this.type}' AND isActive = true`;
    let response = await queryExec(sql);
    let lawyers = response.records.map((lawyer) => new Lawyer(lawyer));
    return lawyers;
  }

  async getLawyerDetails(lawyerId) {
    let sql = `SELECT * FROM AdvoLawyersView WHERE lawyerId = '${lawyerId}'`;
    let response = await queryExec(sql);
    let lawyer = new ViewLawyer(response.records[0]);
  }
}

module.exports = LawyersList;

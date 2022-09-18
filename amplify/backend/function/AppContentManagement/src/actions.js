const queryExec = require("./QueryExec");

async function getSideMenuContent() {
  const sql = `SELECT name FROM AppContent_SideMenu where isEnabled = true`;
  const result = await queryExec(sql);

  let data = result.records.map((record) => record[0].stringValue);
  return data;
}

module.exports = {
  getSideMenuContent,
};

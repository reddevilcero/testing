const queries = require("./../sql/services");
const servicesCtrl = {};
const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    enableArithAbort: true
  }
};

servicesCtrl.getServices = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool.request().query(queries.getServices);
  res.json(result["recordset"]);
};

module.exports = servicesCtrl;

const queries = require("./../sql/rating");
const ratingCtrl = {};
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

ratingCtrl.getUserRaitings = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("userid", req.params.userid)
    .query(queries.getUserRaitings);
  res.json(result["recordset"]);
};

module.exports = ratingCtrl;

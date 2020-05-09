const queries = require("./../sql/address");
const userAddressCtrl = {};
const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    enableArithAbort: true,
  },
};

userAddressCtrl.getUserAddress = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("userId", req.params.userid)
    .query(queries.getUserAddress);
  res.json(result["recordset"]);
};

userAddressCtrl.createUserAddress = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  await pool
    .request()
    .input("userId", req.body.userid)
    .input("alias", req.body.alias)
    .input("firstLineAddress", req.body.firstLineAddress)
    .input("secondLineAddress", req.body.secondLineAddress)
    .input("thirdLineAddress", req.body.thirdLineAddress)
    .input("postcode", req.body.postcode)
    .input("county", req.body.county)
    .input("country", req.body.country)
    .query(queries.insertUserAddress);
  res.sendStatus(200);
};

userAddressCtrl.deleteUserAddress = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  await pool
    .request()
    .input("id", req.params.id)
    .query(queries.deleteUserAddress);
  res.sendStatus(200);
};

module.exports = userAddressCtrl;

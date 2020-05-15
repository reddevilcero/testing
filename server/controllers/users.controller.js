const queries = require("./../sql/users");
const usersCtrl = {};
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

usersCtrl.getUser = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("id", req.params.id)
    .query(queries.getUser);
  res.json(result["recordset"]);
};

usersCtrl.createUser = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  await pool
    .request()
    .input("firstname", req.body.firstname)
    .input("surname", req.body.surname)
    .input("email", req.body.email)
    .input("password", req.body.password)
    .input("userTypeId", req.body.usertypeid)
    .query(queries.createUser);
  res.sendStatus(200);
};

usersCtrl.deleteUser = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  await pool.request().input("id", req.params.id).query(queries.deleteUser);
  res.sendStatus(200);
};

module.exports = usersCtrl;

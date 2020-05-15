const queries = require("./../sql/authentication");
const authCtrl = {};
const jwt = require("jsonwebtoken");
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

authCtrl.login = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("email", req.body.email)
    .input("pwd", req.body.password)
    .query(queries.login);
  let user = result["recordset"][0];
  if (user == null) res.sendStatus(400);
  else {
    user.Password = "";
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken, user });
  }
};

module.exports = authCtrl;

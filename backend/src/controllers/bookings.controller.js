const queries = require("./../sql/bookings");
const bookingCtrl = {};
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

bookingCtrl.getMonthlyBookings = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("userid", req.params.userid)
    .input("month", req.params.month)
    .input("year", req.params.year)
    .query(queries.getMonthlyBookings);
  res.json(result["recordset"]);
};

bookingCtrl.getBooking = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("id", req.params.id)
    .query(queries.getBooking);
  res.json(result["recordset"]);
};

bookingCtrl.getBookingTasks = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("bookingid", req.params.bookingid)
    .query(queries.getBookingTasks);
  res.json(result["recordset"]);
};

bookingCtrl.createBooking = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  let result = await pool
    .request()
    .input("bookerid", req.body.bookerid)
    .input("workerid", req.body.workerid)
    .input("createdate", req.body.createdate)
    .input("bookingdate", req.body.bookingdate)
    .input("modifiedate", req.body.modifiedate)
    .input("stateid", req.body.stateid)
    .query(queries.createBooking);
  res.json(result["recordset"]);
};

bookingCtrl.createBookingTasks = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  await pool
    .request()
    .input("bookingid", req.params.bookingid)
    .input("notes", req.body.notes)
    .input("createdate", req.body.createdate)
    .query(queries.createBookingTasks);
  res.sendStatus(200);
};

bookingCtrl.updateBookingState = async (req, res) => {
  let pool = await sql.connect(dbConfig);
  await pool
    .request()
    .input("id", req.body.bookingid)
    .input("stateid", req.body.stateid)
    .query(queries.updateBookingState);
  res.sendStatus(200);
};

module.exports = bookingCtrl;

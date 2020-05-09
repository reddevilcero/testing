const express = require("express");
const cors = require("cors");
const app = express();

<<<<<<< HEAD
app.use(function (req, res, next) {
=======
app.use(function(req, res, next) {
>>>>>>> 1d8b6c7add4c1e2ac991fe971bc73828dc34be71
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//settings
app.set("port", process.env.PORT);

//middlewares
//app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", require("./routes/users"));
<<<<<<< HEAD
app.use("/api/useraddress", require("./routes/userAddress"));
=======
>>>>>>> 1d8b6c7add4c1e2ac991fe971bc73828dc34be71
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/auth", require("./routes/authentication"));

module.exports = app;

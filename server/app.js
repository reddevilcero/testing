const express = require("express");
const cors = require("cors");
const app = express();

app.use(function (req, res, next) {
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
app.use("/api/useraddress", require("./routes/userAddress"));
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/auth", require("./routes/authentication"));

module.exports = app;

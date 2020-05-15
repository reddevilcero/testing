const { Router } = require("express");
const router = Router();
const { IsAuthenticated } = require("../middlewares/authenticationMiddleware");

const {
  getMonthlyBookings,
  getBooking,
  getBookingTasks,
  createBooking,
  createBookingTasks,
  updateBookingState
} = require("../controllers/bookings.controller");

router.route("/:id").get(IsAuthenticated, getBooking);
router.route("/:userid/:month/:year").get(IsAuthenticated, getMonthlyBookings);
router.route("/").post(IsAuthenticated, createBooking);
router.route("/").put(IsAuthenticated, updateBookingState);

router.route("/tasks/:bookingid").get(IsAuthenticated, getBookingTasks);
router.route("/tasks/:bookingid").post(IsAuthenticated, createBookingTasks);

module.exports = router;

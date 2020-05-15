const { Router } = require("express");
const router = Router();
const { IsAuthenticated } = require("../middlewares/authenticationMiddleware");

const {
  getUserAddress,
  createUserAddress,
  deleteUserAddress,
} = require("../controllers/userAddress.controller");

router.route("/").post(IsAuthenticated, createUserAddress);
router.route("/:id").delete(IsAuthenticated, deleteUserAddress);
router.route("/:userId").get(IsAuthenticated, getUserAddress);

module.exports = router;

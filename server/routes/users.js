const { Router } = require("express");
const router = Router();
const { IsAuthenticated } = require("../middlewares/authenticationMiddleware");

const {
  getUser,
  createUser,
  deleteUser,
} = require("../controllers/users.controller");

router.route("/").post(createUser);
router.route("/:id").delete(IsAuthenticated, deleteUser);
router.route("/:id").get(IsAuthenticated, getUser);
module.exports = router;

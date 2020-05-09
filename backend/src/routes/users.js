const { Router } = require("express");
const router = Router();
const { IsAuthenticated } = require("../middlewares/authenticationMiddleware");

const {
  getUser,
  getUsersByType,
  getUsersByService,
  createUser,
  deleteUser
} = require("../controllers/users.controller");

router.route("/").post(createUser);
router.route("/:id").delete(IsAuthenticated, deleteUser);
router.route("/:id").get(IsAuthenticated, getUser);
router.route("/bytype/:usertypeid").get(IsAuthenticated, getUsersByType);
router.route("/byservice/:serviceid").get(getUsersByService);
module.exports = router;

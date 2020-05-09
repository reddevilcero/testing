const { Router } = require("express");
const router = Router();

const { login } = require("../controllers/authentication.controller");

router.route("/login").post(login);

module.exports = router;

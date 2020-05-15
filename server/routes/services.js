const { Router } = require("express");
const router = Router();
const { IsAuthenticated } = require("../middlewares/authenticationMiddleware");

const { getServices } = require("../controllers/services.controller");

router.route("/").get(IsAuthenticated, getServices);

module.exports = router;

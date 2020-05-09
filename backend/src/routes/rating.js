const { Router } = require("express");
const router = Router();
const { IsAuthenticated } = require("../middlewares/authenticationMiddleware");

const { getUserRaitings } = require("../controllers/rating.controller");

router.route(":userid").get(IsAuthenticated, getUserRaitings);

module.exports = router;

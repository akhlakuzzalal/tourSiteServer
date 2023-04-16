const express = require("express");
const router = express.Router();

const userApi = require("./api/user.api");
router.use("/user", userApi);

const tourApi = require("./api/tour.api");
router.use("/tour", tourApi);

module.exports = router;

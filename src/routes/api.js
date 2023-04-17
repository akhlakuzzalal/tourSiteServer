const express = require("express");
const router = express.Router();

const userApi = require("./api/user.api");
router.use("/user", userApi);

const tourApi = require("./api/tour.api");
router.use("/tour", tourApi);

const blogApi = require("./api/blog.api");
router.use("/blog", blogApi);

module.exports = router;

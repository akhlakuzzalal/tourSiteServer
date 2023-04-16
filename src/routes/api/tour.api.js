const express = require("express");
const router = express.Router();
const TourControler = require("../../controler/tourControler");

router.post("/create", TourControler.createATour);
router.delete("/delete", TourControler.deleteATour);
router.get("/all", TourControler.getAllTours);
router.get("/:tourId", TourControler.getATour);
router.put("/update", TourControler.updateATour);

module.exports = router;

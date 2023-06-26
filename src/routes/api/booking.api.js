const express = require("express");
const router = express.Router();
const BookingController = require("../../controler/booking.controller.js");

router.post("/booking", BookingController.bookingTour);
router.get("/booking", BookingController.getAllBookingTour);
router.put("/update", BookingController.updateTourStatus);


module.exports = router;

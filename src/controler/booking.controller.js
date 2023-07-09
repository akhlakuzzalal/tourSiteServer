const bookingService = require("../service/bookingService.js");
const { OK, ERROR } = require("../utils/responseHelper.js");
const UserService = require("../service/userService.js");


exports.bookingTour = async (req, res) => {
    try {
        const { payload } = req.body;

        const existTour = await bookingService.getBookingByEmail(payload.email, payload.tour_id);

        if (existTour.length > 0) {
            return ERROR(res, [], "You Already booked this tour");
        }
        const bookingData = await bookingService.addBooking(payload);
        return OK(res, bookingData, "Booking successfully");
    } catch (err) {
        ERROR(res, [], "Error while booking tour");
    }
};

exports.updateTourStatus = async (req, res) => {
    try {
        const { email, tourId, data } = req.body;
        const user = await UserService.getUserByEmail(email);
        if (!user.length) return ERROR(res, [], "User not found");

        if (user[0]?.role !== "admin")
            return ERROR(res, [], "You are not authorized to access the api");

        const bookingData = await bookingService.findBookingById(tourId);

        if (!bookingData) return ERROR(res, [], "booking not found");

        const result = await bookingService.updateTourStatus(tourId, data);

        // if (result.message) return ERROR(res, [], result.message);

        return OK(res, result, "Booking updated successfully");

    } catch (err) {
        ERROR(res, [], "Error while booking tour");
    }
};
exports.getBookingByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const bookingData = await bookingService.findBookingByEmail(email);
        if (!bookingData) return ERROR(res, [], "booking not found");

        return OK(res, bookingData, "Get  booking by email ");

    } catch (err) {
        ERROR(res, [], "Error while get booking tour");
    }
};
exports.getAllBookingTour = async (req, res) => {
    try {
        const allBookingTour = await bookingService.getAllBooking();

        return OK(res, allBookingTour, "Get all booking tour");

    } catch (err) {
        ERROR(res, [], "Error while get booking tour");
    }
};
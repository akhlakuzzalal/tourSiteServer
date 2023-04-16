const { db } = require("../database/connection");

exports.createANewTour = async (tourBody) => {
  try {
    const tour = await db.Tour.create(tourBody);
    return tour;
  } catch (err) {
    return err;
  }
};

exports.getAllTours = async () => {
  const tours = await db.Tour.find({});
  return tours;
};

exports.findTourById = async (tourId) => {
  const tour = db.Tour.findById(tourId);
  //   console.log("object", tour);
  return tour;
};

exports.deleteATour = async (tourId) => {
  try {
    const tour = await db.Tour.findByIdAndDelete(tourId);
    return tour;
  } catch (err) {
    return err;
  }
};

exports.updateATour = async (tourId, tourBody) => {
  try {
    const tour = db.Tour.findByIdAndUpdate(tourId, tourBody, { new: false });
    return tour;
  } catch (err) {
    return err;
  }
};

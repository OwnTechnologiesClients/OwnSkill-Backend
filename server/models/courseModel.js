const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "Course name is required."],
    unique: true,
  },
  instructorName: {
    type: String,
    required: [true, "Instructor name is required."],
  },
  instructorTitle: {
    type: String,
    required: [true, "Instructor title is required."],
  },
  courseFees: {
    type: Number,
    required: [true, "Course fees is required."],
  },
  noOfLessons: {
    type: Number,
    required: [true, "Number of lessons is required."],
  },
  reviewOutOf5: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  noOfReviews: {
    type: Number,
    min: 0,
    default: 0,
  },
  courseHour: {
    type: Number,
    min: 0,
    default: 0,
  },
  courseImage: {
    type: String,
  },
  instructorImage: {
    type: String,
  },
});

const Course = mongoose.model("Courses", courseSchema);

module.exports = Course;

const mongoose = require("mongoose");

const courseOverviewSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "Course Name is required."],
    unique: true,
  },
  amount: {
    type: String,
    required: [true, "Amount is required."],
  },
  courseDescription: {
    type: String,
    required: [true, "Course Description is required."],
  },
  duration: {
    type: String,
    default: "0",
  },
  lessons: {
    type: String,
    default: "0",
  },
  maxStudent: {
    type: String,
    default: "0",
  },
  videos: {
    type: String,
    default: "0",
  },
  skillLevel: {
    type: String,
    default: "0",
  },
  language: {
    type: String,
    default: "English",
  },
  keyPoints: {
    type: [String],
    default: [],
  },
});

const CourseOverview = mongoose.model("CourseOverviews", courseOverviewSchema);

module.exports = CourseOverview;

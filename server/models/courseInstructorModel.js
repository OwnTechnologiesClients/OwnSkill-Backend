const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  instructorName: {
    type: String,
    required: true,
  },
  instructorEmail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  aboutInstructor: {
    type: String,
    required: true,
  },
});

const CourseInstructor = mongoose.model("CourseInstructors", instructorSchema);

module.exports = CourseInstructor;

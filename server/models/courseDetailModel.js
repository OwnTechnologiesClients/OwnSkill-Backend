const mongoose = require("mongoose");

const courseDetailSchema = new mongoose.Schema({
  courseFeatures: {
    duration: { type: String, default: "Not specified" },
    noOfLessons: { type: Number, default: 0 },
    maxStudents: { type: Number, default: 0 },
    videosLength: { type: String, default: "Not specified" },
    skillLevel: { type: String, default: "Beginner" },
    language: { type: String, default: "English" },
  },
  overview: {
    details: { type: String, default: "Not available" },
    points: {
      type: [String],
      default: ["Point 1", "Point 2", "Point 3"],
    },
  },
  curriculum: {
    type: [
      {
        title: { type: String, default: "Untitled" },
        titleDetails: { type: String, default: "Not available" },
        titleHeading: { type: String, default: "Untitled" },
      },
    ],
    default: [],
  },
  reviews: {
    type: [
      {
        image: { type: String, default: "default-image.jpg" },
        name: { type: String, default: "Anonymous" },
        content: { type: String, default: "No review available" },
        rating: { type: Number, default: 0 },
      },
    ],
    default: [],
  },
  instructor: {
    image: { type: String, default: "default-instructor.jpg" },
    name: { type: String, default: "Unknown Instructor" },
    title: { type: String, default: "Instructor" },
    content: { type: String, default: "No information available" },
  },
});

const CourseDetailModel = mongoose.model("CourseDetail", courseDetailSchema);

module.exports = CourseDetailModel;

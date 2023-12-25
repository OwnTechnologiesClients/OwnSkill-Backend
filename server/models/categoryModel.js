const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryTitle: {
    type: String,
    required: [true, "Category title is required."],
    unique: true,
  },
  categoryImage: {
    type: String,
    required: [true, "Category image is required."],
  },
  noOfCourses: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const Category = mongoose.model("Categories", categorySchema);

module.exports = Category;

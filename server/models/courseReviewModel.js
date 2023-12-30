const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  reviewMessage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  stars: {
    type: String,
    required: true,
  },
});

const CourseReview = mongoose.model('CourseReviews', reviewSchema);

module.exports = CourseReview;

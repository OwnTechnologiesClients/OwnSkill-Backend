const mongoose = require("mongoose");

const curriculumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topics: [
    {
      topicTitle: {
        type: String,
        required: true,
      },
      topicTime: {
        type: String,
        required: true,
      },
      icons: {
        type: String,
      },
    },
  ],
});

const Curriculum = mongoose.model("Curriculums", curriculumSchema);

module.exports = Curriculum;

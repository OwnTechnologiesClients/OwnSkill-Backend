const CourseDetailModel = require("../models/courseDetailModel");

exports.addCourseDetail = async (req, res) => {
  try {
    const newCourseDetail = await CourseDetailModel.create(req.body);
    res.status(201).json(newCourseDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    const courseDetails = await CourseDetailModel.find();
    res.status(200).json(courseDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseDetailByID = async (req, res) => {
  try {
    const courseDetail = await CourseDetailModel.findById(req.params.id);
    if (!courseDetail) {
      return res.status(404).json({ error: "Course detail not found" });
    }
    res.status(200).json(courseDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourseDetailByID = async (req, res) => {
  try {
    const updatedCourseDetail = await CourseDetailModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourseDetail) {
      return res.status(404).json({ error: "Course detail not found" });
    }
    res.status(200).json(updatedCourseDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourseDetailByID = async (req, res) => {
  try {
    const deletedCourseDetail = await CourseDetailModel.findByIdAndRemove(
      req.params.id
    );
    if (!deletedCourseDetail) {
      return res.status(404).json({ error: "Course detail not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require("express");
const {
  addCourseDetail,
  getCourseDetails,
  getCourseDetailByID,
  updateCourseDetailByID,
  deleteCourseDetailByID,
} = require("../controllers/courseDetailController");

const router = express.Router();

router.post("/course-details", addCourseDetail);
router.get("/course-details", getCourseDetails);
router.get("/course-details/:id", getCourseDetailByID);
router.put("/course-details/:id", updateCourseDetailByID);
router.delete("/course-details/:id", deleteCourseDetailByID);

module.exports = router;

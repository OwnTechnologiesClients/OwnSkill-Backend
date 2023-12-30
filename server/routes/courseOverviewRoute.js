const express = require("express");
const {
  addCourseOverview,
  addCourseReview,
  addCourseInstructor,
  addCourseTeamMember,
  addCourseCurriculum,
} = require("../controllers/courseOverviewController");
const multer = require("multer");
const router = express.Router();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = file.mimetype.split("/")[1];
    cb(null, `file-${uniqueSuffix}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[1] === "jpeg" ||
    file.mimetype.split("/")[1] === "png" ||
    file.mimetype.split("/")[1] === "jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

router.post("/course-overview", addCourseOverview);

router.post("/course-review", upload.single("image"), addCourseReview);

router.post(
  "/course-instructor",
  upload.single("profilePicture"),
  addCourseInstructor
);

router.post(
  "/course-team-member",
  upload.single("profilePicture"),
  addCourseTeamMember
);

router.post("/course-curriculum", addCourseCurriculum);

module.exports = router;

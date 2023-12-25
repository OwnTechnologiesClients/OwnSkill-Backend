const express = require("express");
const router = express.Router();
const multer = require("multer");

const { addCourse, getCourse, getCourseByID, updateCourseByID, deleteCourseByID } = require("../controllers/courseController");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `file-${uniqueSuffix}.${ext}`);
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (
//     file.mimetype.split("/")[1] === "jpeg" ||
//     file.mimetype.split("/")[1] === "png" ||
//     file.mimetype.split("/")[1] === "jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

router.route("/courses").post(addCourse);

router.route("/courses").get(getCourse);

router.route("/courses/:id").get(getCourseByID);

router.route("/courses/:id").put(updateCourseByID);

router.route("/courses/:id").delete(deleteCourseByID);


module.exports = router;

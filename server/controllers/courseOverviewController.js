const CourseOverviewModel = require("../models/courseOverviewModel");
const CourseReview = require("../models/courseReviewModel");
const CourseInstructor = require("../models/courseInstructorModel");
const TeamMember = require("../models/courseTeamMemberModel");
const Curriculum = require("../models/curriculumModel");

exports.addCourseOverview = async (req, res) => {
  try {
    const newCourseOverview = await CourseOverviewModel.create(req.body);
    res.status(200).json({ message: "Published" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCourseReview = async (req, res) => {
  try {
    const { name, email, reviewMessage, stars } = req.body;
    const image = req.file ? req.file.filename : null;

    await CourseReview.create({
      name,
      email,
      reviewMessage,
      stars,
      image,
    });

    res.status(200).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCourseInstructor = async (req, res) => {
  try {
    const { instructorName, instructorEmail, title, aboutInstructor } =
      req.body;

    const profilePicture = req.file ? req.file.filename : null;

    const newInstructor = new CourseInstructor({
      instructorName,
      instructorEmail,
      title,
      profilePicture,
      aboutInstructor,
    });

    await newInstructor.save();

    res.status(201).json({ message: "Instructor data added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCourseTeamMember = async (req, res) => {
  try {
    const {
      memberName,
      memberEmail,
      title,
      aboutMember,
      linkedInLink,
      instagramLink,
      youtubeLink,
      xLink,
    } = req.body;

    const profilePicture = req.file ? req.file.filename : null;

    const newTeamMember = new TeamMember({
      memberName,
      memberEmail,
      title,
      profilePicture,
      aboutMember,
      linkedInLink,
      instagramLink,
      youtubeLink,
      xLink,
    });

    await newTeamMember.save();

    res.status(201).json({ message: "Team member data added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCourseCurriculum = async (req, res) => {
  try {
    const newCurriculum = new Curriculum(req.body);
    await newCurriculum.save();

    res.status(201).json({ message: "Curriculum saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

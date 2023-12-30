const express = require("express");
const jwt = require("jsonwebtoken");
const route = express.Router();







route.post("/login", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    if (!student) {
      return res.send({
        success: false,
        message: "Student not found!",
      });
    }
    // console.log(req.body)

    if (req.body.dateofbirth !== student.dateofbirth) {
      return res.send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { userId: student._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.send({
      success: true,
      message: "User logged successfully",
      data: token,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

route.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await Student.findOne({ _id: req.body.userId });
    user.password = undefined;
    return res.send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = route;

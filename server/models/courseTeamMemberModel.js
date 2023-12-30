const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  memberName: {
    type: String,
    required: true,
  },
  memberEmail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  aboutMember: {
    type: String,
    required: true,
  },
  linkedInLink: {
    type: String,
  },
  instagramLink: {
    type: String,
  },
  youtubeLink: {
    type: String,
  },
  xLink: {
    type: String,
  },
});

const TeamMember = mongoose.model("TeamMembers", teamMemberSchema);

module.exports = TeamMember;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUGyU6tpW11e7cM3tJvzlJXBw8MbPQt5grw&s", // Default avatar URL
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

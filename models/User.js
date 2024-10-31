const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true // Nếu bạn muốn trường này là bắt buộc
  }
});

module.exports = mongoose.model("User", userSchema);

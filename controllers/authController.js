const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    if (!email || !fullName) {
      return res
        .status(400)
        .json({ message: "Email and full name are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const user = new User({ email, password, fullName });
    await user.save();

    res.status(201).json({
      status: "success",
      data: { email: user.email, fullName: user.fullName }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during registration." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email." });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Incorrect password." });
    }

    res.status(200).json({
      status: "success",
      data: { email: user.email, fullName: user.fullName }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

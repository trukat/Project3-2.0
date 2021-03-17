const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password, passwordCheck } = req.body;

      if (!firstName || !lastName || !email || !password || !passwordCheck) {
        return res.status(400).json({ msg: "All fields are required" });
      }

      if (passwordCheck.length < 8) {
        return res
          .status(400)
          .json({ msg: "Password must be longer than 8 characters" });
      }

      if (password !== passwordCheck) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      const oldUser = await User.findOne({ email: email });

      if (oldUser) {
        return res.status(400).json({ msg: "Email already in use" });
      }

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: passwordHash,
      });

      const savedNewUser = await newUser.save();
      res.json(savedNewUser);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
};

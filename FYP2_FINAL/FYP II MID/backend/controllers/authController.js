const User = require("../models/user");

const signup = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json({ signupStatus: "success", user: user });
    } catch (e) {
      console.log(e);
      res.status(400).json({ signupStatus: "failed", error: e.message });
    }
};

const getUser = async (req, res) => {
  try {
    let userId = req.params.userId
    let data = await User.findById(userId);
    res.status(200).json({ data });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        throw { status: 400, error: "Bad request, email or password not found" };
      }
      const user = await User.findOne({
        email: email,
        password: password,
      })
      if (!user) {
        throw { status: 404, error: "Incorrect email or password" };
      }
  
      res.status(200).json({ loginStatus: "success", user: user });
    } catch (e) {
      res.status(e.status).json({ loginStatus: "failed", error: e.error });
    }
  };

  module.exports = { login, signup, getUser };
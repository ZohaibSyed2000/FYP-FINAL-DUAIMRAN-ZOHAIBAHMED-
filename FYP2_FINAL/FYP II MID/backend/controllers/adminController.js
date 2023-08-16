const Admin = require("../models/admin");

const adminlogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        throw { status: 400, error: "Bad request, email or password not found" };
      }
      const admin = await Admin.findOne({
        email: email,
        password: password,
      })
      if (!admin) {
        throw { status: 404, error: "Incorrect email or password" };
      }
  
      res.status(200).json({ loginStatus: "success", admin: admin });
    } catch (e) {
      res.status(e.status).json({ loginStatus: "failed", error: e.error });
    }
  };

  const adminsignup = async (req, res) => {
    try {
      const admin = await Admin.create(req.body);
      res.status(200).json({ signupStatus: "success", admin: admin });
    } catch (e) {
      console.log(e);
      res.status(400).json({ signupStatus: "failed", error: e.message });
    }
};

  module.exports = { adminlogin, adminsignup };
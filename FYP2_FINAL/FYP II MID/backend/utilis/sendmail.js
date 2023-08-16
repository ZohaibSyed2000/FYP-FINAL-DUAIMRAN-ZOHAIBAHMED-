const nodemailer = require("nodemailer");
const myemail = "duaimran57@gmail.com";
const mypass = "fwortbxxztzgcctc";

const sendemail = async (email, notify_b, notify_c, notify_m) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: myemail,
      pass: mypass,
    },
  });
  await transporter.sendMail({
    from: myemail,
    to: email,
    subject: "",
    text: "Car found",
    html: `Hello <br> Your desired car ${notify_b} ${notify_c} ${notify_m} is Uploaded On Know your car value <br>.
      Check it out!`,
  });
};
module.exports = sendemail;

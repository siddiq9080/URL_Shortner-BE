import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_NAME,
    pass: process.env.PASS_KEY,
  },
});

export let mailobj = {
  from: process.env.MAIL_NAME,
  to: [],
  subject: "Reset Password",
  text: "Click on the below link to reset your password",
};

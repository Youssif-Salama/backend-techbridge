import nodemailer from "nodemailer";
import * as templates from "../templates/templates.module.js";
import env from "dotenv";
env.config();

const nodemailerTransporterService = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmailService = async (data) => {
  console.log({data});

  try {
    await nodemailerTransporterService.sendMail({
      from: process.env.EMAIL,
      to: data.to,
      subject: data.subject,
      html: templates[data.fun](data.funParams),
    });
  } catch (error) {
    console.log(error);
  }
}

export default nodemailerTransporterService;
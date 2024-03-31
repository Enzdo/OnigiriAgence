'use server'
var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------

export default async function sendMail(formData) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "enzodeniau2003@gmail.com",
    subject: formData.subject,
    html: `
        Voici le message reçu : ${formData.message}
        et voici les infos de l'utilisateur : 
        Nom : ${formData.firstName}
        Prenom : ${formData.lastName}
        Mail : ${formData.email}
        Numero de tel : ${formData.phoneNumber}
    
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email Sent");
    return true;
  } catch (error) {
    console.error("Error while sending email:", error);
    throw new Error(error);
  }
}

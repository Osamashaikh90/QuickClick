const nodeMailer = require("nodemailer");
const MailGen = require("mailgen");
require("dotenv").config();

  const registerMail = async(req,res) => {
  const {username,userEmail,text, subject} = req.body;

  let nodeConfig = {
    service: "gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  let transporter = nodeMailer.createTransport(nodeConfig);

  let MailGenerator = new MailGen({
    theme: "default",
    product: {
      name: "QuickClick",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: username,
      intro: text || "Welcome to QuickClick Family",
      outro: "Need help getting started? You can contact our support team 24/7. \n\n We're SO excited for your journey!",
      
    },
  };
  let mail = MailGenerator.generate(response);
  let message = {
    from : process.env.EMAIL,
    to : userEmail,
    subject: subject ||  "SignUp Successfull!",
    html: mail
  }

  transporter.sendMail(message).then(() => {
    return res.status(201).json({
        msg: "you should receive an email"
    })
  }).catch(error => {
    return res.status(500).json({ error })
  })
  
}

module.exports = {
registerMail
}

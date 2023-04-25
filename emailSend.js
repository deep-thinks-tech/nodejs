const mailSender = require('nodemailer');

//Configure sender details
const sender = mailSender.createTransport({
    service: 'gmail',
    auth: {
        user: "deepa.r2007@gmail.com",
        pass: "jnlmkicgujdziygz" //Generated app specific password in https://myaccount.google.com/apppasswords
    }
});

//Configure mail details
const mailOptions = {
    from: "deepa.r2007@gmail.com",
    to: "deepthinkstech@gmail.com",
    subject: "Surprise!!",
    text: "Hello Deeps, surprised to see this mail? I have sent this mail from Node JS."
};

//Send mail
sender.sendMail(mailOptions, function(err, info){
    err ? console.log(err) : console.log ("Email Sent. " + info.response);
});
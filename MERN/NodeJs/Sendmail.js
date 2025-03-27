require("dotenv").config()
let nodemailer = require('nodemailer');

let EmailInformations = {
    to : ["hammadk0500@gmail.com", "subhanaptech8@gmail.com" , "samreenrafiq@aptechnorth.edu.pk" , "owaisalamaptech6540@gmail.com"],
    from : process.env.EMAIL,
    subject : "Test Email",
    html : "<h1>Test Email</h1>"
}

let secureInfo = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASS_KEY,

    }
})

secureInfo.sendMail(EmailInformations,function (error,info) {
    if (error) {
        console.log("SOmthing Went Wrong")
        console.log(error)
    }else{
        console.log("Email Has Been Sent")
    }
    
})
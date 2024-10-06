import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "krishnagavali.harmaig@gmail.com",
        pass: "rvlv oate lyib tlce",  // Sensitive information should not be hardcoded
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

export const sendEmail = async (email, message, subject, html) => {
    try {
        const mailOptions = {
            from: "krishnagavali.harmaig@gmail.com",
            to: email,
            subject: subject,
            html: html
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
};

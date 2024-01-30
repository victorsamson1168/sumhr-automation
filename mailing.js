const nodemailer = require('nodemailer');
const { pass2 } = require('./pass');

async function sendEmail() {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pulkitcube@gmail.com', // Your email address
            pass: "hdhy miwi cmzp felb" // Your password
        }
    });

    // Message object
    let message = {
        from: 'pulkitcube@gmail.com', // Sender email address
        to: 'pulkit.guglani@mckinleyrice.co', // List of recipients
        subject: 'Test Email', // Subject line
        text: 'This is a test email sent from Node.js using Nodemailer.' // Plain text body
    };

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail(message);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.log('Error occurred while sending email: ', error);
    }
}

// Call the function to send the email
sendEmail();

const cron = require('cron');



const startSchedule = (user) => {

    const { startTime, username, password } = user;
    console.log("Started");

    const job = new cron.CronJob(`${startTime.second} ${startTime.minute} ${startTime.hour} * * *`, function () {

        console.log("Credentials");
        console.log(username, password);
    }, null, true, 'Asia/Kolkata');
    job.start();

}

module.exports = { startSchedule }
// Start the cron job

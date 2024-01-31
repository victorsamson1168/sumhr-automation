const cron = require("cron");
const { clockIn, clockOut } = require("./login");
const startClockInSchedule = (user) => {
  const { startTime, username, password } = user;
  console.log("Started");

  const job = new cron.CronJob(
    `${startTime.second} ${startTime.minute} ${startTime.hour} * * *`,
    function () {
      console.log("Credentials");
      console.log(username, password);
      clockIn(username, password);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  job.start();
};

const startClockOutSchedule = (user) => {
  const { startTime: endTime, username, password } = user;
  console.log("Started");

  const job = new cron.CronJob(
    `${endTime.second} ${endTime.minute} ${endTime.hour} * * *`,
    function () {
      console.log("Credentials");
      console.log(username, password);
      clockOut(username, password);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  job.start();
};

module.exports = { startClockInSchedule };
// Start the cron job

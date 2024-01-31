import { CronJob } from "cron";
import { clockIn, clockOut } from "./login.js";

const startClockInSchedule = (user) => {
  const { startTime, username, password } = user;
  console.log("Started");

  const job = new CronJob.CronJob(
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

export { startClockInSchedule, startClockOutSchedule };
// Start the cron job

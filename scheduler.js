import { CronJob } from "cron";
import { clockIn, clockOut } from "./login.js";
import { sendEmail } from "./mailing.js";

const startClockInSchedule = (user) => {
  console.log("User:", user);
  const { startTime, username, password, notificationMail } = user;
  console.log("Started clockin thread for", username);

  const job = new CronJob(
    `${startTime.second} ${startTime.minute} ${startTime.hour} * * *`,
    function () {
      console.log("Credentials for clock in");
      console.log(username, password);
      clockIn(username, password);
      // add mailing logic
      // sendEmail(notificationMail);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  job.start();
};

const startClockOutSchedule = (user) => {
  const { endTime, username, password } = user;
  console.log("Started clockout thread for", username);

  const job = new CronJob(
    `${endTime.second} ${endTime.minute} ${endTime.hour} * * *`,
    function () {
      console.log("Credentials for clockout");
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

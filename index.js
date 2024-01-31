import { startClockInSchedule } from "./scheduler.js";
import express from "express";
import { users } from "./data.js";
import { loginMongo } from "./mongoConnection.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("TEST DATA");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// on start

const start = async () => {
  // login mongo
  await loginMongo();

  users.forEach((user) => {
    startClockInSchedule(user);
  });
};

// start();

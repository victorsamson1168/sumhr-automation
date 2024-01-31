const { startClockInSchedule } = require("./scheduler");
const express = require("express");
const data = require("./data.json");
const { loginMongo } = require("./mongoConnection");

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

  data.users.forEach((user) => {
    startClockInSchedule(user);
  });
};

start();

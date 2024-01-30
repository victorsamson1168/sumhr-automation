const { startSchedule } = require("./scheduler");
const express = require("express");
const data = require("./data.json");
const { loginMongo } = require("./mongoConnection");

// Create an Express application
const app = express();
const port = 3000; // Port number on which the server will listen

// Define a route handler for the default route
app.get("/", (req, res) => {
  res.send("Hello World!"); // Send a response to the client
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// on start

const start = async () => {
  await loginMongo();

  data.users.forEach((user) => {
    startSchedule(user);
  });
};
// login mongo

start();

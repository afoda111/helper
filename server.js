const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const sendMessage = require("./helper");
const App = express();
App.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
App.use(bodyParser.json());
const port = process.env.PORT;
App.listen(port, () => {
  console.log("service Running");
});

App.get("/", (req, res) => {
  res.send("hello");
});

App.post("/whatsapp", async (req, res) => {
  const senderId = req.body.From;
  const incomingMessage = req.body.Body;
  const regex = /(\d+)/;
  const timer = req.body.Body.includes("seconds")
    ? req.body.Body.match(regex)[0] * 1000
    : req.body.Body.includes("minutes")
    ? req.body.Body.match(regex)[0] * 60 * 1000
    : req.body.Body.includes("hours")
    ? req.body.Body.match(regex)[0] * 60 * 60 * 1000
    : null;
  await sendMessage.sendMessage(senderId, incomingMessage, timer);
});

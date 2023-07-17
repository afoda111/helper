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

App.post("/whatsapp", (req, res) => {
 
    sendMessage.sendMessage(req.body);
  
})

require("dotenv").config();

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const messagesArray = [
  "I'm here to help you Buddy",
  "I got you Buddy",
  "You are way stronger than what you think you are",
  "You will get through this just hold on tight",
  "They don't know me son !!",
  "Look at you and see within, see how powerfull you'are",
  'keep your head down and do the work buddy',
  'I love youuu',
  'you"re strong, beautful, smart, keep going',
  'Have you eaten enough today???'
];

const returnDifferentMessage = (Array) => {
  return Array[Math.floor(Math.random() * messagesArray.length)];
};

const returnTimer = (body) => {
  let timer;
  const regex = /(\d+)/;
  const number = body.Body.match(regex)[0];
  if (body.Body.includes("seconds")) {
    timer = number * 1000;
  } else if (body.Body.includes("minutes")) {
    timer = number * 60 * 1000;
  } else if (body.Body.includes("hours")) {
    timer = number * 60 * 60 * 1000;
  }
  return timer;
};

const sendMessage =  (body) => {
  const senderId = body.From;
const incomingMessage = body.Body;

    try {
      setInterval(async ()=>{
        await client.messages.create({
          body: `${returnDifferentMessage(messagesArray)}`,
          from: "whatsapp:+14155238886",
          to: senderId,
        });
      }, 600000)
    } catch (error) {
      console.log(error);

    }
  

  
};

module.exports = {
  sendMessage,
};

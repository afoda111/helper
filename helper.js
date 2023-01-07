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
];

const returnDifferentMessage = (Array) => {
  return Array[Math.floor(Math.random() * messagesArray.length)];
};

const sendMessage = async (senderId, incomingMessage, timer) => {
  try {
    setTimeout(async () => {
      await client.messages.create({
        body: `${incomingMessage}`,
        from: "whatsapp:+14155238886",
        to: senderId,
      });
    }, timer);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMessage,
};

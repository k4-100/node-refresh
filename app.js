const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (message) => {
  console.log(`called response, ${message}`);
});

const flag = process.argv[2];

if (flag === "hello") customEmitter.emit("response", (message = "text"));

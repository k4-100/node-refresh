const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("called response");
});

const flag = process.argv[2];

if (flag === "hello") customEmitter.emit("response");

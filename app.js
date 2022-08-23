const fs = require("fs");

// default 64kb
// last buffer - remainder
// highWaterMark - control size
const stream = fs.createReadStream("./content/big.txt", {
  highWaterMark: 1000,
  // encoding: "utf8",
});

stream.on("data", (res) => {
  console.log(res);
});

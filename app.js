const fs = require("fs");
for (let i = 0; i < 10000; i++)
  fs.writeFileSync("./content/big.txt", `Hello World ${i}\n`, { flag: "a" });

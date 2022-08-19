const path = require("path");
const fs = require("fs");

const testPath = path.join("content", "subfolder", "test.txt");
let file = fs
  .readFileSync(testPath, {
    encoding: "utf8",
  })
  .trim();

console.log("\n", file, "\n");

fs.writeFileSync(testPath, file + "\n" + file);

file = fs.readFileSync(testPath, {
  encoding: "utf8",
});

console.log("\n", file, "\n");

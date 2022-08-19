const path = require("path");

// system path separator
console.log("\n", path.sep, "\n");

const filePath = path.join("/content//////", "////subfolder", "test.txt");
console.log("\n", filePath, "\n");

const base = path.basename(filePath);

console.log("\n", base, "\n");

const absoluteFilePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);

console.log("\n", absoluteFilePath, "\n");

const path = require("path");
const fs = require("fs");

const filePath = "./content/subfolder/test.txt";
let file = "";
fs.readFile(filePath, "utf8", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  file = res;
  fs.writeFile(filePath, file + "\n" + file, (err, res) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(file);
});

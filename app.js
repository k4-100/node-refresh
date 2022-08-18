// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require("./names");
const sayHi = require("./utl");

sayHi("susan");
sayHi(john);
sayHi(peter);

const os = require("os");

// info about current user
console.log(os.userInfo(), "\n");

// system uptime in seconds
console.log("\n", os.uptime(), "\n");

// info about cpu cores
console.log("\n", os.cpus(), "\n");

console.log("\n", os.endianness(), "\n");

console.log("\n", os.homedir(), "\n");

console.log("\n", os.networkInterfaces(), "\n");

console.log("\n", os.freemem() / (1000 * 1000 * 1000), "\n");

console.log("\n", os.totalmem() / (1000 * 1000 * 1000), "\n");

console.log("\n", os.tmpdir(), "\n");

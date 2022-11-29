const fs = require("fs");
const readLine = require("readline");

const readStream = fs.createReadStream("./database.log", "utf-8");
const firstIp = "89.123.1.41";
const secondIp = "34.48.240.111";
const firstWriteStream = fs.createWriteStream(`${firstIp}`);
const secondWriteStream = fs.createWriteStream(`${secondIp}`);

let num = 0;

const rl = readLine.createInterface({
  input: readStream,
  terminal: true,
});

rl.on("line", (line) => {
  if (line.includes(firstIp)) {
    firstWriteStream.write(line + "\n");
  }
  if (line.includes(secondIp)) {
    secondWriteStream.write(line + "\n");
  }
  console.warn(++num);
});

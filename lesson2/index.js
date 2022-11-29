import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import moment from "moment";
import "moment-duration-format";

let arrIntervals = [];
const rl = readline.createInterface({ input, output });
console.log("Введите диапазон проверяемых значений через запятую");
console.log("Или введите дату в формате ss-mm-HH-DD-MM-YY");
rl.on("line", (input) => {
  if (input === "exit") return rl.close();

  const [ss, mm, HH, DD, MM, YY] = input.split("-").map((i) => +i);
  const bindTime = moment(
    `${YY},${MM},${DD},${HH},${mm},${ss}`,
    "YY,MM,DD,HH,mm,ss"
  ).unix();
  function timer(bindTime) {
    let diffTime = bindTime - moment().unix();
    let duration = moment
      .duration(diffTime * 1000, "milliseconds")
      .asMilliseconds();
    const interval = setInterval(() => {
      duration = moment.duration(duration - 1000, "milliseconds");
      console.log(duration.format("s-m-h-d-M-y"));
    }, 1000);
    arrIntervals.push(interval);
  }
  timer(bindTime);

  if (input === "clearIntervals") {
    arrIntervals.map((i) => {
      clearInterval(i);
    });
  }
});

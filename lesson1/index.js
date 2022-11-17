const colors = require("colors");
let colorsType = "red";

const setColors = (el) => {
  if (colorsType === "red") {
    console.log(colors.red(el));
    colorsType = "yellow";
  } else if (colorsType === "yellow") {
    console.log(colors.yellow(el));
    colorsType = "green";
  } else {
    console.log(colors.green(el));
    colorsType = "red";
  }
};
const getSimpleNumbers = (a, b) => {
  const primes = [];

  if (a instanceof Number || b instanceof Number) {
    console.log("Please insert numbers");
  } else if (a > b) {
    console.log("Second number must be more then first");
  } else if (!a || !b) {
    console.log("Please insert Number a and Number b");
  } else {
    nextPrime: for (let i = a; i <= b; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
      }
      primes.push(i);
    }
    primes.forEach((el) => setColors(el));
    if (primes.length === 0) {
      console.log("There are not any primes between this numbres");
    }
  }
};

getSimpleNumbers(1, 100);

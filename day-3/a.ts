export {};

const input = await Deno.readTextFile("./input.txt");

const readings = input.split("\r\n");

const length = readings[0].length;

const zeroCounts = Array(length).fill(0);

for (const reading of readings) {
  for (let i = 0; i < length; i++) {
    if (reading[i] === "0") zeroCounts[i]++;
  }
}

let gamma = [];

for (const count of zeroCounts) {
  gamma.push(count > readings.length / 2 ? "0" : "1");
}

let epsilon = gamma.map((val) => (val == "0" ? "1" : "0"));

console.log(parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2));

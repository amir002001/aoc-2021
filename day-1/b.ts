export {};

const input = await Deno.readTextFile("./input.txt");

let values = input.split("\n").map((val) => Number(val));

let firstIndex = 0;
let secondIndex = 1;

let firstMeasureMent = 0;
let secondMeasurement = 0;

let countIncreases = 0;

while (secondIndex + 3 < values.length) {
  for (let i = firstIndex; i < firstIndex + 3; i++) {
    firstMeasureMent += values[i];
  }
  
  for (let i = secondIndex; i < secondIndex + 3; ++i) {
    secondMeasurement += values[i];
  }
  if (firstMeasureMent < secondMeasurement) ++countIncreases;
  firstMeasureMent = secondMeasurement = 0;
  firstIndex += 1;
  secondIndex += 1;
}

console.log(countIncreases);

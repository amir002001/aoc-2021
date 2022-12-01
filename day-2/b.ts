export {};

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

const moves = lines.map((line) => line.split(" "));
let vertical = 0;
let horizontal = 0;
let aim = 0

for (const [move, unit] of moves) {
  switch (move) {
    case "forward":
      horizontal += Number(unit);
      vertical += aim * Number(unit)
      break;
    case "up":
      aim -= Number(unit);
      break;
    case "down":
      aim += Number(unit);
      break;
  }
}

console.log(moves);

console.log(vertical * horizontal);


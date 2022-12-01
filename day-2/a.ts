export {};

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

const moves = lines.map((line) => line.split(" "));
let vertical = 0;
let horizontal = 0;

for (const [move, unit] of moves) {
  switch (move) {
    case "forward":
      horizontal += Number(unit);
      break;
    case "up":
      vertical -= Number(unit);
      break;
    case "down":
      vertical += Number(unit);
      break;
  }
}

console.log(moves);

console.log(vertical * horizontal);


import { random } from "./random.js";

function randomChoice(choices) {
  return choices[Math.floor(random(0, choices.length))];
}

export { randomChoice };

import { prng } from "./prng";
import { random } from "./random";

function randomBool() {
  return random(0, 1) > 0.5;
}

export { randomBool };

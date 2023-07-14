import palettes from "./palettes/100.json";
import { randomSnap } from "../randomSnap";

export const createMonochromePalette = () => {
  // Main color, a lot of saturaiton and lightness
  let mainColor = chroma({
    h: randomSnap(0, 360, 1),
    s: randomSnap(0.6, 1, 0.1),
    l: randomSnap(0.5, 0.75, 0.1),
  });

  // Complement color, as background
  let complementColor = chroma(mainColor).set("hsl.h", "+180");

  let colors = chroma
    .scale([mainColor, mainColor.set("hsl.h", "+90")])
    .mode("lch")
    .colors(5);

  return colors;
};

export const getRandomPalette = () => {
  let colorIndex = randomSnap(0, 100, 1);
  return {
    colors: sortColorsByLuminance([...palettes[colorIndex]], false),
    colorIndex: colorIndex,
  };
};

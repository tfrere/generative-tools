import chroma from "chroma-js";

export const sortColorsBySaturation = (colors, isAscend = True) => {
  return colors.sort((color1, color2) => {
    const saturation1 = chroma(color1).get("hsl.s");
    const saturation2 = chroma(color2).get("hsl.s");
    if (isAscend) return saturation1 - saturation2;
    else return saturation1 + saturation2;
  });
};

export const sortColorsByLuminance = (colors, isAscend = True) => {
  return colors.sort((color1, color2) => {
    const luminance1 = chroma(color1).get("hsl.l");
    const luminance2 = chroma(color2).get("hsl.l");
    if (isAscend) return luminance1 - luminance2;
    else return luminance1 + luminance2;
  });
};

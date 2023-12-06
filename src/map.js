/**
 * Maps a value from one range to another.
 *
 * @param {number} n - The value to map.
 * @param {number} start1 - The lower bound of the input range.
 * @param {number} end1 - The upper bound of the input range.
 * @param {number} start2 - The lower bound of the output range.
 * @param {number} end2 - The upper bound of the output range.
 * @returns {number} The mapped value.
 */
function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

export { map };

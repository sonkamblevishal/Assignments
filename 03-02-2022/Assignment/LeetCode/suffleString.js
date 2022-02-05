/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let suffledArr = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    suffledArr[i] = s[indices.indexOf(i)];
  }
  return suffledArr.join("");
};
var restoreString = function (s, indices) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[indices[i]] = s[i];
  }
  return Object.values(obj).join("");
};

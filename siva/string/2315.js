/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let slashCount = 0;
  let total = 0;

  for (const value of s) {
    if (value == "|") {
      slashCount++;
    } else {
      if (slashCount % 2 == 0 && value == "*") {
        total++;
      }
    }
  }
  console.log(total);
  return total;
};
countAsterisks("l|*e*et|c**o|*de|");

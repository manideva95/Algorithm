var finalString = function (s) {
  let res = "";
  for (const letter of s) {
    if (letter == "i") {
      res = res.split("").reverse().join("");
    } else {
      res = res + letter;
    }
  }
  return res;
};
finalString("string");

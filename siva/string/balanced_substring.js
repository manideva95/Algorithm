var balancedStringSplit = function (s) {
  let countR = 0;
  let countL = 0;
  let total = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      countR++;
    } else if (s[i] == "L") {
      countL++;
    }
    if (countR == countL) {
      total++;
      countL = 0;
      countR = 0;
    }
  }
};

balancedStringSplit("RLRRLLRLRL");

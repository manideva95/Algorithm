var maximumNumberOfStringPairs = function (words) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("").reverse().join("");
    for (let j = i + 1; j < words.length; j++) {
      if (word == words[j]) {
        result++;
      }
    }
  }
  return result;
};
maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]);

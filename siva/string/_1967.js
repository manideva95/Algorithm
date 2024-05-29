var numOfStrings = function (patterns, word) {
  let result = 0;
  for (let pattern of patterns) {
    console.log(pattern);
    if (word.includes(pattern)) {
      result++;
    }
  }
  console.log(result);
  return result;
};

numOfStrings(["a", "b", "c"], "aaaaabbbbb");

var findWordsContaining = function (words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
};

let value = findWordsContaining(["leet", "code"], "e");
console.log(value);

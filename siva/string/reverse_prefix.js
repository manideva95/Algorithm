var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  console.log(index);
  let reverse = word
    .substring(0, index + 1)
    .split("")
    .reverse()
    .join("");
  console.log(reverse);
  let remainingValue = word.substring(index + 1, word.length);
  console.log(reverse + remainingValue);
  return reverse + remainingValue;
};

reversePrefix("abcdefd", "d");

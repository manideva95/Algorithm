var mostWordsFound = function (sentences) {
  let result = 0;
  for (const sentence of sentences) {
    if (result < sentence.split(" ").length) {
      result = sentence.split(" ").length;
    }
  }
  return result;
};
let value = mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
console.log(value);

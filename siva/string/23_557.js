var reverseWords = function (s) {
  let res = "";
  console.log(s.split(" "));
  for (word of s.split(" ")) {
    res = res + " " + word.split("").reverse().join("");
    console.log(word.split(" ").reverse().join(" "));
  }
  console.log(res);
  return res;
};
reverseWords("Let's take LeetCode contest");

var reverseWords = function (s) {
  let words = s.split(" ");
  let outputArr = [];

  for (let i = 0; i < words.length; i++) {
    outputArr.push(words[i].split("").reverse().join(""));
  }
  return outputArr.join(" ");
};
reverseWords("Let's take LeetCode contest");

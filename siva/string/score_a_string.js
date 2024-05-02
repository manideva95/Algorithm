var scoreOfString = function (s) {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return score;
};

let value = scoreOfString("hello");
console.log(value);

//every string having a character code
// Math.abs values will give only a positive value
//charCodeAt method will return the code of every alpahbet value for both caps and small letters

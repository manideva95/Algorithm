let isPalindrome = function (x) {
  x = x.toString();
  let reverse = "";
  for (let index = x.length - 1; index >= 0; index--) {
    reverse += x[index];
  }
  return x == reverse;
};

console.log(isPalindrome(101));

// steps:
// 1. convert a value into string
// 2. assign a new variable and print in reverse order and add to the variable and check

let isPalindrome = function (x) {
  x = x.toString();
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] == x[right]) {
      left++;
      right--;
    } else {
      return false;
    }
    return true;
  }
};

console.log(isPalindrome(101));

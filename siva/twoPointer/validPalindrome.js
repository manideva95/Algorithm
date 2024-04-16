var isPalindrome = function (s) {
  const trimmedValue = s.replace(/[^a-z0-9]/gi, "");
  let x = trimmedValue.toLowerCase();
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] == x[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

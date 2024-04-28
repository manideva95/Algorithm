// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    let arr = s.split("")
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        if (arr[l] !== arr[r]) {
            return false
        } else {
            l++;
            r--;
        }
    }
    return true
};

console.log(isPalindrome("amanaplanacanalpanama"))

// https://leetcode.com/problems/lexicographically-smallest-palindrome/description/
var makeSmallestPalindrome = function (s) {
    let wordArr = s.split("")
    let left = 0
    let right = wordArr.length - 1
    while (left < right) {
        if (s.charCodeAt(left) > s.charCodeAt(right)) {
            wordArr[left] = wordArr[right]
        } else if (s.charCodeAt(left) < s.charCodeAt(right)) {
            wordArr[right] = wordArr[left]
        }
        left++;
        right--;
    }
    return wordArr.join("")
};

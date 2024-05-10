// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    //two pointers
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let temp = s[left]          //Need to swap without temp variable
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
};



// var reverseString = function (s) {
//     s.reverse()
// };



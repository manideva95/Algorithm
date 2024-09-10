// https://leetcode.com/problems/removing-stars-from-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let substring = '';
    for (let c of s) {
        if (c == '*') substring = substring.slice(0, -1)
        else substring = substring + c
    }
    return substring
};

const result = removeStars("vvv*cc***ccc")
console.log(result);

// Observation:
// output Time Complexity : O(n)
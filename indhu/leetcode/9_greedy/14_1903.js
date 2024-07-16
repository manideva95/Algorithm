// https://leetcode.com/problems/largest-odd-number-in-string/description/

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let i = num.length - 1;
    while (i >= 0) {
        if (parseInt(num[i]) % 2) break;
        else num = num.slice(0, i);
        i--;
    }
    return num
};

const result = largestOddNumber("41000")
console.log(result);

// Observation:
// output Time Complexity : O(n)
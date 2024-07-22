// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/description/

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    num = num.toString()
    let sort = num.split('').sort((a, b) => b - a);
    let odd = sort.map(item => item % 2 ? item : null).filter(Boolean)
    let even = sort.map(item => !(item % 2) ? item : null).filter(Boolean)
    let result = '';

    for (let n = 0; n < num.length; n++) {
        if (parseInt(num[n]) % 2) {
            result = result + odd.shift();
        } else {
            result = result + even.shift();
        }
    }
    return result
};

const result = largestInteger(51234)
console.log(result);

// Observation:
// output Time Complexity : O(n)
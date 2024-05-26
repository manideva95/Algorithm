// https://leetcode.com/problems/harshad-number/
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = 0;
    for (let c of x.toString().split('')) {
        sum = sum + parseInt(c)
    }
    return x % sum ? -1 : sum
};

const result = sumOfTheDigitsOfHarshadNumber(99)
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let result = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (i % 7 == 0 && i != 0) count = i / 7 + 1;
        else ++count
        result = result + count
    }
    return result
};
const result = totalMoney(5)
console.log(result);

// Observation:
// output Time Complexity : O(n)



// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach(account => max = Math.max(max, account.reduce((a, b) => a + b, 0)))
    return max
};

const result = maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])
console.log(result);

// Observation:
// output Time Complexity : O(n)
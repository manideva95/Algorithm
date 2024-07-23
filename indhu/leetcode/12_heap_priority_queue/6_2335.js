// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/description/

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    amount.sort((a, b) => b - a);
    let difference = (amount[1] + amount[2]) - amount[0];
    if (difference <= 0) return amount[0];
    else {
        return Math.ceil(difference / 2) + amount[0]
    }
};

const result = fillCups([5, 4, 4])
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)
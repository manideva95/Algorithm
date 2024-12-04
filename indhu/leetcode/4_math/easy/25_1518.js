// https://leetcode.com/problems/water-bottles/
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let sum = numBottles
    while (numBottles >= numExchange) {
        sum = sum + Math.trunc(numBottles / numExchange)
        numBottles = Math.trunc(numBottles / numExchange) + numBottles % numExchange
    }
    return sum
};

const result = numWaterBottles(30, 4)
console.log(result);

// Observation:
// output Time Complexity : O(n)
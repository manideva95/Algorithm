// https://leetcode.com/problems/calculate-delayed-arrival-time/

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    let result = arrivalTime + delayedTime;
    if (result > 23) result = result - 24;
    return result
};

const result = findDelayedArrivalTime(9, 8)
console.log(result);

// Observation:
// output Time Complexity : O(1)
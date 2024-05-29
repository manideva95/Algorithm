// https://leetcode.com/problems/convert-the-temperature/
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    return [celsius + 273.15, (celsius * 1.80) + 32.00]
};

const result = convertTemperature(34.33)
console.log(result);

// Observation:
// output Time Complexity : O(1)

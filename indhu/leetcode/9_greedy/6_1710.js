// https://leetcode.com/problems/maximum-units-on-a-truck/description/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let result = 0, sumBox = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        let sum = truckSize - sumBox;
        if ((sumBox + boxTypes[i][0]) >= truckSize) {
            result += sum * boxTypes[i][1]
            break;
        } else {
            sumBox += boxTypes[i][0];
            result += boxTypes[i][0] * boxTypes[i][1]
        }
    }
    return result
};

const result = maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10)
console.log(result);

// Observation:
// output Time Complexity : O(n)
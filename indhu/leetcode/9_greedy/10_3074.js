// https://leetcode.com/problems/apple-redistribution-into-boxes/description/

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    let sumOfApple = apple.reduce((a, b) => a + b, 0);
    capacity.sort((a, b) => b - a);
    let boxes = 0, sum = 0;
    for (let c of capacity) {
        sum += c; boxes++;
        console.log(sum);
        if (sum >= sumOfApple) break
    }
    return boxes

};

const result = minimumBoxes([1, 2, 3], [4, 3, 1, 5, 2])
console.log(result);

// Observation:
// output Time Complexity : O(n)
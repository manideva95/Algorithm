// https://leetcode.com/problems/partition-array-according-to-given-pivot/

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const left = [], right = [], btw = []
    nums.forEach((num) => {
        if (num < pivot) left.push(num);
        else if (num > pivot) right.push(num);
        else btw.push(num);
    });
    return left.concat(btw, right)
};
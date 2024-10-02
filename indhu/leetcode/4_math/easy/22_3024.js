// https://leetcode.com/problems/type-of-triangle/

/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    const obj = new Set(nums);
    if (obj.size == 1) {
        return "equilateral"
    } else {
        if (nums[0] + nums[1] > nums[2] &&
            nums[2] + nums[1] > nums[0] &&
            nums[0] + nums[2] > nums[1]) {
            return obj.size == 2 ? "isosceles" : "scalene"
        } else return "none"
    }

};

const result = triangleType([3, 4, 5])
console.log(result);

// Observation:
// output Time Complexity : O(1)
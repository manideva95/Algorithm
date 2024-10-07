// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let sum = 0;
    grid.forEach(nums => {
        var count = 0;
        function check(nums, start, end) {
            if (start >= end) return
            let mid = Math.round((start + end) / 2);
            if (nums[mid] < 0 && nums[mid - 1] >= 0) return count = count + mid;
            else if (nums[mid] >= 0) check(nums, mid, end);
            else check(nums, start, mid);
        };
        if (nums[0] < 0) sum = sum + nums.length;
        else check(nums, 0, nums.length - 1);
        if (count) sum = sum + nums.length - count

    });
    return sum;
};



const result = countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])
console.log(result);

// Observation:
// output Time Complexity : O(n)
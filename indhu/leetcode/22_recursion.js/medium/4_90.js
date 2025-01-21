// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = [];
    const recursion = (arr, i) => {
        if (i > nums.length) return
        ans.push(arr);
        for (let j = i; j < nums.length; j++) {
            if (nums[j - 1] === nums[j] && j > i) continue;
            recursion([...arr, nums[j]], j + 1)
        }
    }
    recursion([], 0)
    return ans;
};

console.log(subsetsWithDup([4, 4, 4, 1, 4]));

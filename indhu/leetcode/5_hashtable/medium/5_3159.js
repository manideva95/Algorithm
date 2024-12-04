// https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
    let index = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        if (nums[i] === x) index.push(i)
        if (nums[i + 1] === x) index.push(i + 1)
    }
    for (let i = 0; i < queries.length; i++) {
        if (index[queries[i] - 1] !== undefined) queries[i] = index[queries[i] - 1]
        else queries[i] = -1
    }
    return queries
};
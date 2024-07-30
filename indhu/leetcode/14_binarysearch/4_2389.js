// https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b);

    let result = [];
    for (let q of queries) {
        let sum = 0, count = 0;
        for (let num of nums) {
            sum += num;
            if (sum > q) break;
            else count++
        }
        result.push(count)
    }
    return result
};
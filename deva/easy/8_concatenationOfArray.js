// https://leetcode.com/problems/concatenation-of-array/
//1929. Concatenation of Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let newArr = [...nums, ...nums]
    return newArr
};
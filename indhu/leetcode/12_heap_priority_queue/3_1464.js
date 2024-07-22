// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    nums.sort((a, b) => b - a);
    return (nums[0] - 1) * (nums[1] - 1)

    const maxValue = Math.max(...nums)
    const arrMaxIndex = nums.indexOf(maxValue)
    nums.splice(arrMaxIndex, 1)[0]

    const secondMaxValue = Math.max(...nums)
    const arrSecondMaxIndex = nums.indexOf(secondMaxValue)
    nums.splice(arrSecondMaxIndex, 1)


    return (maxValue - 1) * (secondMaxValue - 1)
};
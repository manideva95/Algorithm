
// https://leetcode.com/problems/majority-element-ii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let count = 0, el1, el2, count2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0 && el2 !== nums[i]) {
            el1 = nums[i]; count++;
        } else if (count2 === 0 && el1 !== nums[i]) {
            el2 = nums[i]; count2++;
        }
        else if (el1 === nums[i]) count++;
        else if (el2 === nums[i]) count2++;
        else {
            count--;
            count2--;
        }
    }
    count = 0; count2 = 0
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (el1 === nums[i]) count++;
        if (el2 === nums[i]) count2++
    }
    if (count > (nums.length / 3)) ans.push(el1);
    if (count2 > (nums.length / 3)) ans.push(el2);
    return ans
};
// https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let index = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return nums.reverse();
    }
    for (let i = nums.length - 1; i > index; i--) {
        if (nums[index] < nums[i]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            break
        }
    }
    let j = nums.length - 1;
    index++;
    while (index < j) {
        [nums[index], nums[j]] = [nums[j], nums[index]];
        index++; j--;
    }
    return nums
};


// find i<i+1
//find smallest from i+1 to n
//swap smallest and i
//sort remaining i+1;

// https://leetcode.com/problems/shuffle-the-array/description/

var shuffle = function (nums, n) {
    let shuffledNums = []
    for (let i = 0; i < (nums.length / 2); i++) {
        shuffledNums.push(nums[i])
        shuffledNums.push(nums[i + (nums.length / 2)])
    }
    return shuffledNums
};

console.log(shuffle([2, 5, 1, 3, 4, 7]))


// NOTE: SOLVE THIS PROBLEM IN PAPER
// (nums.length / 2) and n are same value
// https://leetcode.com/problems/number-of-good-pairs/description/

var numIdenticalPairs = function (nums) {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                goodPairs++
            }
        }
    }
    return goodPairs
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))


// var numIdenticalPairs = function(nums) {
//     const freqMap = {};
//     let count = 0;

//     for (const num of nums) {
//         if (freqMap[num]) {
//             count += freqMap[num];
//             freqMap[num]++;
//         } else {
//             freqMap[num] = 1;
//         }
//     }

//     return count;
// };
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let nums = [8, 7, 9, 7]
let target = 14

// const myFunc = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if(i !== j){
//                 if (nums[i] + nums[j] === target) {
//                     return [i, j]
//                 }
//             }
//         }
//     }
// }

const myFunc = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(myFunc(nums, target))

// i + j
// 0 + 1
// 0 + 2
// 0 + 3

// 1 + 2
// 1 + 3

// 2 + 3

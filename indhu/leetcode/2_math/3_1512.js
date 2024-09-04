// https://leetcode.com/problems/number-of-good-pairs/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    // let count = 0;
    // for (let i = 0; i < nums.length - 1; i++) {
    //     let j = i + 1;
    //     while (j < nums.length) {
    //         if (nums[i] == nums[j]) {
    //             count++;
    //         }
    //         j++
    //     }
    // }
    // return count

    // Alternate
    n = 0
    arr = []
    for (let x of nums) {
        console.log(arr[x], arr);
        if (arr[x]) {
            console.log(n);
            n += arr[x]
            arr[x] += 1
        } else {
            arr[x] = 1
        }
    }
    return n
};

const result = numIdenticalPairs([1, 2, 3, 1, 1, 3])
console.log(result);

// Observation:
// output Time Complexity : O(n)

// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b);
    // if (nums[0] >= 0) {
    //     if (k % 2) nums[0] = -(nums[0])
    // } else
    //     for (let i = 0; i < k; i++) {
    //         if (nums[i] < 0) nums[i] = -(nums[i])
    //         else {
    //             if ((k - i) % 2) nums[i] = -(nums[i])
    //             break;
    //         }
    //         if ((nums[i] > 0 && nums[i] < nums[i + 1]) || (nums[i] > 0 && !nums[i + 1])) {
    //             if ((k - (i + 1)) % 2) nums[i] = -(nums[i])
    //             break;
    //         }
    //     }
    for (i = 0; k > 0;) {
        if (i + 1 == nums.length || nums[i] <= nums[i + 1]) {
            nums[i] = -nums[i]
            k--
            continue
        }
        nums[i + 1] = -nums[i + 1]
        k--
        i++
    }
    return nums.reduce((a, b) => a + b, 0)
};

const result = largestSumAfterKNegations([-2, 5, 0, 2, -2], 3)
console.log(result);

// Observation:
// output Time Complexity : O(n)
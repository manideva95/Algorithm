// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let i = 0; let j = nums.length - 1;
    while (i <= j) {
        if (i == j) {
            nums[i] = nums[i] * nums[i]
            break;
        }
        nums[i] = nums[i] * nums[i]
        nums[j] = nums[j] * nums[j]
        i++;
        j--;
    }
    return nums.sort((a, b) => a - b)

    // Alternate
    const result = new Array(nums.length).fill(null);

    let left = 0;
    let right = nums.length - 1;
    let current = nums.length - 1;

    while (left <= right) {
        const leftValSqr = Math.pow((nums[left]), 2);
        const rightValSqr = Math.pow(nums[right], 2);

        if (leftValSqr > rightValSqr) {
            result[current] = leftValSqr;
            left++;
        } else {
            result[current] = rightValSqr;
            right--;
        }
        current--;
    }


    return result;
};

const result = sortedSquares([-7, -3, 2, 3, 11])
console.log(result);

// Observation:
// output Time Complexity : O(n)

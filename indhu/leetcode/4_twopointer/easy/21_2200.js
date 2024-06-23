// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    // let ind = [];
    // let result = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === key) ind.push(i);
    // }
    // const checkIndex = (i) => {
    //     let l = 0;
    //     while (l < ind.length) {
    //         if (Math.abs(ind[l] - i) <= k) return true
    //         l++
    //     }
    //     return false
    // }
    // let i = 0, j = nums.length - 1;
    // while (i <= j) {
    //     if (i < j) {
    //         if (checkIndex(i)) result.push(i)
    //     }
    //     if (checkIndex(j)) result.push(j)
    //     i++; j--;
    // }
    // return result.sort((a, b) => a - b)


    // Alternate
    const indices = [];
    let left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !== key) ++right;
        else {
            while (left < nums.length) {
                if (right - left > k) ++left;
                else if (left > right && left - right > k) break;
                else indices.push(left++);

            }
            ++right;
        }
    }
    return indices;
};


const result = findKDistantIndices([2, 2, 2, 2, 0], 0, 1)
console.log(result);

// Observation:
// output Time Complexity : O(n)
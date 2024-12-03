// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (arr, x) {
    // nums.sort((a, b) => a - b);
    // console.log(nums);
    // let count = 1, max = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === (nums[i + 1] - 1)) {
    //         count++
    //     } else {
    //         max = Math.max(max, count);
    //         count = 1
    //     }
    // }
    // max = Math.max(max, count);
    // return max

    arr.sort((a, b) => a - b);
    let start = 0, end = arr.length - 1;
    let ans = [-Infinity, Infinity]
    if (arr[0] > x) {
        ans[0] = -1
    } else
        while (start <= end && end >= 0) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === x) {
                ans[0] = arr[mid]; break
            }
            else if (arr[mid] < x) {
                ans[0] = Math.max(ans[0], arr[mid])
            }
            if (arr[mid] < x) {
                start = mid + 1
            } else {
                end = mid - 1;
            }
        }
    start = 0, end = arr.length - 1
    if (arr[end] < x) {
        ans[1] = -1
    } else
        while (start <= end && end >= 0) {
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] >= x) {
                ans[1] = Math.min(ans[1], arr[mid])
            }
            if (arr[mid] < x) {
                start = mid + 1
            } else {
                end = mid - 1;
            }
        }
    return ans
};

const res = longestConsecutive([100, 4, 200, 1, 3, 2], 5);
console.log(res);

// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];
    const binarySearch = (arr, val, start, end) => {
        const length = Math.floor((start + end) / 2);

        if (arr[length] == val) {
            let j = length;
            while (j < nums.length) {
                if (nums[j] !== target) break;
                result.push(j)
                j++;
            }
            j = length - 1;
            while (j >= 0) {
                if (nums[j] !== target) break;
                result.push(j)
                j--;
            }
            return result
        }

        if (end < start) return null;

        if (arr[length] > val) {
            return binarySearch(arr, val, start, length - 1);
        } else {
            return binarySearch(arr, val, length + 1, end);
        }
    }
    binarySearch(nums, target, 0, (nums.length - 1));

    return result.sort((a, b) => a - b)
};


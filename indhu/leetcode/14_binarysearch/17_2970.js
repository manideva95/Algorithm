// https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
    let count = 0, len = nums.length * (nums.length + 1) / 2, r = 1, k = 0
    for (let l = 1; l < len; l++) {
        let removedCurrentNum = [...nums]
        removedCurrentNum.splice(k, r);
        let i = 0, j = removedCurrentNum.length - 1, isValid = true;
        while (i <= j) {
            if (removedCurrentNum[i] >= removedCurrentNum[i + 1]) {
                isValid = false; break;
            }
            if (removedCurrentNum[j] <= removedCurrentNum[j - 1]) {
                isValid = false; break;
            }
            i++; j--;
        }
        if (isValid) count++
        k++
        if ((k + r - 1) == nums.length) { k = 0; r++ }
    }
    return count + 1
};
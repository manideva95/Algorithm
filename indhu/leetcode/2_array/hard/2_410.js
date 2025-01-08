// https://leetcode.com/problems/split-array-largest-sum/description/

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (nums, k) {
    let start = Math.max(...nums), end = nums.reduce((a, b) => a + b, 0);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let res = minPossible(nums, k, mid);
        if (res) {
            end = mid - 1
        } else start = mid + 1;
    }
    return start
};

const minPossible = (nums, k, mid) => {
    let count = 1, sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
        if (sum > mid) {
            count++;
            sum = nums[i]
        }
        if (count > k) return false;
    }
    return count
}

const result = minimumSum([10, 20, 30, 40], 2)
console.log(result);

//25
//25 +46
//25+46+28
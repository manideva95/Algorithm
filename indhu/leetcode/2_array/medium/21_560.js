// https://leetcode.com/problems/subarray-sum-equals-k/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0; sum = 0, map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remove = sum - k;
        let val = map.get(remove);
        if (val) {
            count += val
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
};

// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let map = new Map();
    for (let el of nums) {
        let val = map.get(el)
        if (val + 1 == nums.length / 2) return el
        map.set(el, (val || 0) + 1);
    }
};
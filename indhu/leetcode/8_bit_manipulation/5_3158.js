// https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    let map = new Map();
    let xor = 0;
    nums.forEach(num => {
        if (map.has(num)) {
            xor ^= num
        } else map.set(num, num)
    })
    return xor;
};
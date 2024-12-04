// https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    let set = new Set(nums);
    let size = set.size;
    for (let num of set) {
        let revNum = 0;
        while (num) {
            revNum = (revNum * 10) + (num % 10)
            num = Math.floor(num / 10)
        }
        set.add(revNum);
        size--;
        if (size === 0) break;
    }

    return set.size
};
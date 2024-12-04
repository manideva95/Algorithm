// https://leetcode.com/problems/find-unique-binary-string/description/

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let set = new Set();
    nums.forEach(num => set.add(parseInt(num, 2)));

    for (let i = 0; i < nums.length * 2; i++) {
        if (!set.has(i)) return i.toString(2).padStart(nums.length, 0)
    }

};

const result = findDifferentBinaryString(['10', '11'])
console.log(result);
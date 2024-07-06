// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const xorConvertion = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum ^= element;
    });
    return sum
}
var subsetXORSum = function (nums) {
    let result = [[]], sum = 0;
    for (let num of nums) {
        const len = result.length;
        for (let i = 0; i < len; i++) {
            const temp = result[i].slice();
            temp.push(num);
            let sum = xorConvertion(temp)
            result.push([sum]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i][0]) sum += result[i][0]
    }
    return sum
};
// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/description/
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    num = num.toString()
    let min = num, max = num, count;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === num[0]) {
            min = min.slice(0, i) + '0' + min.slice(i + 1, num.length)
        }
        if (num[i] != 9 && count == undefined) count = num[i];
        if (num[i] === count) {
            max = max.slice(0, i) + '9' + max.slice(i + 1, num.length)
        }
    };

    return parseInt(max) - parseInt(min)
};
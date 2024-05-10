// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    if (num[num.length - 1] != 0) {
        return num
    }
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] == 0) {
            continue
        } else {
            return num.slice(0, i+1)
        }
    }
};
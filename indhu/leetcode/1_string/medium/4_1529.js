// https://leetcode.com/problems/minimum-suffix-flips/description/

/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
    let count = 0;
    for (let i = 1; i < target.length; i++) {
        if (target[i - 1] !== target[i]) count++
    }
    return count ? (target[0] === '0' ? count : count + 1) : 0
};

const result = minFlips('10011')
console.log(result);
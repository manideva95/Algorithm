// https://leetcode.com/problems/simplified-fractions/
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
    let result = []; let set = new Set();
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (!set.has(j / i)) {
                result.push(`${j}/${i}`);
                set.add(j / i)
            }
        }
    }
    return result
};
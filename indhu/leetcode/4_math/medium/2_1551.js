// https://leetcode.com/problems/minimum-operations-to-make-array-equal/description/

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    // if (n === 1) return 0
    // let result = [0];
    // for (let i = 1; result.length < n; i++) {
    //     let sum = result[result.length - 1] + i;
    //     result.push(sum, sum + i)
    // }
    // return n % 2 ? result[result.length - 1] :result[result.length - 2] 
    return (n * n) / 4
};
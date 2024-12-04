// https://leetcode.com/problems/the-kth-factor-of-n/description/


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let factors = []
    for (let i = 1; i <= n && factors.length <= k; i++) {
        if (!(n % i)) factors.push(i)
    }
    return factors[k - 1] || -1
};
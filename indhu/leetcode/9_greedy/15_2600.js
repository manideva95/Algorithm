// https://leetcode.com/problems/k-items-with-the-maximum-sum/description/

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    let total = numOnes + numZeros
    let remainder = total - k

    if (k <= numOnes) return k
    else if (k > numOnes && k <= total) return numOnes
    else if (k > total) return numOnes + remainder

};
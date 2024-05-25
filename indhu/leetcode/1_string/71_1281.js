// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let sum = 0; let product = 1;
    for (let c of n.toString()) {
        sum = sum + parseInt(c);
        product = product * parseInt(c)
    }
    return product - sum
};

const result = subtractProductAndSum(4421)
console.log(result);

// Observation:
// output Time Complexity : O(n)
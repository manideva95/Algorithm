// https://leetcode.com/problems/number-of-even-and-odd-bits/description/
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    let result = [0, 0];
    n = n.toString(2);
    for (let i = 0; i < n.length; i++) {
        if (n[(n.length - 1) - i] === '1') {
            if (i % 2 === 0) result[0]++;
            else result[1]++
        }
    }
    return result
};

const result = evenOddBit(50)
console.log(result);

// Observation:
// output Time Complexity : O(n)
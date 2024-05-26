// https://leetcode.com/problems/sum-multiples/
/**
 * @param {number} 
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) {
            sum = sum + i
        }
    }
    return sum
};

const result = sumOfMultiples(9)
console.log(result);

// Observation:
// output Time Complexity : O(n)
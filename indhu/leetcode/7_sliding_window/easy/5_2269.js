// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let count = 0, numStr = num.toString()

    for (let i = 0; i <= numStr.length - k; i++) {
        let substring = numStr.slice(i, i + k);
        console.log(substring);
        if (num % parseInt(substring) === 0) {
            count++
        }
    }

    return count;
};

const result = divisorSubstrings(111, 1)
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let count = 0
    for (let c of num.toString()) {
        if (!(num % parseInt(c))) count++
    }
    return count
};

const result = countDigits(0)
console.log(result);

// Observation:
// output Time Complexity : O(log n)














// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push('FizzBuzz')
        } else if (i % 3 == 0) {
            result.push('Fizz')
        } else if (i % 5 == 0) {
            result.push('Buzz')
        } else {
            result.push(i.toString())
        }
    }
    return result;
};

const result = fizzBuzz(1)
console.log(result);

// Observation:
// output Time Complexity : O(n)
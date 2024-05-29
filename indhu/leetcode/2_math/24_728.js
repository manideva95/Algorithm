// https://leetcode.com/problems/self-dividing-numbers/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        const numbs = i.toString();
        let valid = true;
        for (let numb of numbs) {
            if ((parseInt(numbs) % parseInt(numb)) || numb == 0) {
                valid = false;
                break;
            }
        }
        if (valid) result.push(parseInt(numbs))
    }
    return result;
};

const result = selfDividingNumbers(2, 2)
console.log(result);

// Observation:
// output Time Complexity : O(n log n)
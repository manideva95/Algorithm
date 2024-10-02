// https://leetcode.com/problems/count-integers-with-even-digit-sum/

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        const toStr = i.toString();
        if (i.length == 1) {
            if (!(parseInt(toStr) % 2)) result.push(i)
        } else {
            let sum = 0;
            for (let s of toStr) {
                sum = sum + parseInt(s)
            }
            if (!(sum % 2)) {
                result.push(i)
            }
        }
    }
    return result.length
};

const result = countEven(4)
console.log(result);

// Observation:
// output Time Complexity : O(n)
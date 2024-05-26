// https://leetcode.com/problems/maximum-69-number/
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    // let result = num;
    // let string = num.toString()
    // for (let i = 0; i < num.toString().length; i++) {
    //     if (string[i] == 6) {
    //         string = string.substring(0, i) + '9' + string.substring(i + 1, string.length)
    //         result = Math.max(result, parseInt(string))
    //     }
    //     string = num.toString()
    // }
    // return result

    // Alternate
    let z = String(num).split('')
    const index = z.findIndex(item => item === '6')
    z[index] = '9'
    z = z.join('')
    return Number(z)
};

const result = maximum69Number(96666696)
console.log(result);

// Observation:
// output Time Complexity : O(n)
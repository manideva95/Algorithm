// https://leetcode.com/problems/convert-a-number-to-hexadecimal/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    let map = new Map([
        [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6'], [7, '7'], [8, '8'], [9, '9'], [10, 'a'], [11, 'b'], [12, 'c'], [13, 'd'], [14, 'e'], [15, 'f'], [0, '0']
    ])
    if (num === 0) return 0;
    let result = ''
    num = num > 0 ? num : num + Math.pow(2, 32)
    while (num) {
        result = map.get(num % 16) + result;
        num = Math.floor(num / 16)
    }

    return result
};

const result = toHex(-1)
console.log(result);

// Observation:
// output Time Complexity : O(n)
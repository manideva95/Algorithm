// https://leetcode.com/problems/optimal-partition-of-string/

/**
 * @param {string} s
 * @return {number}
 */

// topic: hash, string, greedy
var partitionString = function (s) {
    const obj = new Map();
    for (let i = 0; i < s.length; i++) {
        let j = i + 1;
        while (j < s.length) {
            const subString = s.substring(i, j);
            if (subString.length !== new Set(subString.split('')).size) {

            }
            j++
        }

    }
};

const result = partitionString('abbabacb')
console.log(result);


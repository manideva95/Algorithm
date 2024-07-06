// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */


var countPrimeSetBits = function (left, right) {
    let count = 0;
    for (let i = left; i <= right; i++) {
        let setBits = i.toString(2).replaceAll('0', '').length
        console.log(setBits);
        if ([2, 3, 5, 7, 11, 13, 17, 19].includes(setBits)) count++
    }
    return count
};

const result = countPrimeSetBits(3434, 5555)
console.log(result);

// Observation:
// output Time Complexity : O(n)
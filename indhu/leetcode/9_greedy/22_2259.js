// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let max = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            let num = BigInt(`${number.slice(0, i)}${number.slice(i + 1, number.length)}`)
            if (num > max) max = num
        }
    }
    return max.toString();
};

const result = removeDigit("24525243542523524545", "3")
console.log(result);

// Observation:
// output Time Complexity : O(n)
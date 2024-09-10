// https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/description/

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    const result = []
    for (let i = 0; i <= Infinity; i++) {
        let binaryVal = i.toString(2);
        if (binaryVal.length > n) {
            break
        } else if (binaryVal.length < (n - 1)) {
            continue
        } else {
            const validate = binaryVal.padStart(n, 0);
            if (!validate.includes('00')) {
                result.push(validate)
            }
        }
    }
    return result
};
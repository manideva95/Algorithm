// https://leetcode.com/problems/decode-xored-array/description/
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let result = [first]

    for (let i = 0; i < encoded.length; i++) {
        result.push(result[i] ^ encoded[i]);
    }
    return result
};
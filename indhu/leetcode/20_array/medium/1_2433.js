// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    const result = [pref[0]];
    for (let i = 1; i < pref.length; i++) {
        result.push(pref[i - 1] ^ pref[i])
    }
    return result
};
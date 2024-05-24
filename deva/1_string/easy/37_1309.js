// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    const mapping = {};
    for (let i = 1; i <= 26; i++) {
        if (i < 10) {
            mapping[i.toString()] = String.fromCharCode(96 + i);
        } else {
            mapping[i.toString() + "#"] = String.fromCharCode(96 + i);
        }
    }
    // console.log(mapping)

    let result = ""
    for (let i = s.length - 1; i >= 0;) {
        if (s[i] == "#") {
            let key = s[i - 2] + s[i - 1] + s[i]
            // console.log(key)
            result += mapping[key]
            i = i - 3
        } else {
            result += mapping[s[i]]
            // console.log(s[i])
            i--
        }
    }
    return result.split('').reverse().join('')
};
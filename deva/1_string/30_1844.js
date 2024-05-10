// https://leetcode.com/problems/replace-all-digits-with-characters/description/

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {

    const shift = (c, x) => {
        return String.fromCharCode(c.charCodeAt(0) + x)
    }

    let result = ""
    for (let i = 0; i < s.length; i = i + 2) { //incrementing 2 with i to iterate as pairs bcoz the input is like a1 c1 e1
        if (s[i + 1]) { // to check whether last character in the pair is available or not
            result = result + s[i] + shift(s[i], Number(s[i + 1]))
        } else {
            result = result + s[i]
        }
        // console.log(i, s[i], s[i + 1])
        // console.log(result)
    }
    return result
};
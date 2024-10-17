// https://leetcode.com/problems/keyboard-row/

/**
 * @param {string[]} words
 * @return {string[]}
 */

const compareString = (keyVal, s) => {
    s = new Set(s.split(''));
    for (let c of s) {
        if (!keyVal.has(c)) return false
    }
    return true
}
var findWords = function (words) {
    let level1 = new Set('qwertyuiop'.split(''));
    let level2 = new Set('asdfghjkl'.split(''));
    let level3 = new Set('zxcvbnm'.split(''));
    let result = []
    for (let word of words) {
        let lowerCase = word.toLowerCase();
        if (level1.has(lowerCase[0])) {
            if (compareString(level1, lowerCase)) result.push(word)
        } else if (level2.has(lowerCase[0])) {
            if (compareString(level2, lowerCase)) result.push(word)
        } else if (level3.has(lowerCase[0])) {
            if (compareString(level3, lowerCase)) result.push(word)
        }
    }
    return result
};
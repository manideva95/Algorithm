// https://leetcode.com/problems/hash-divided-string/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function (s, k) {
    const n = s.length / k
    const slice = [];
    for (let i = 0; i < s.length; i = i + k) {
        slice.push(s.slice(i, k + i))
    }
    let result = '';
    slice.forEach(item => {
        let sum = 0;
        item.split('').forEach(char => sum += (char.charCodeAt(0) - 97))
        result += String.fromCharCode((sum % 26) + 97)
    })
    return result
};
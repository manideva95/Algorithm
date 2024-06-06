// https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let s = words[0];
    for (let i = 1; i < words.length; i++) {
        let valid = ''
        for (let c of s) {
            if (words[i].includes(c)) {
                valid = valid + c;
                words[i] = words[i].replace(c, '');
            }
        }
        s = valid;
    }
    return s.split('');
};
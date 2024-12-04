// https://leetcode.com/problems/groups-of-special-equivalent-strings/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
    let set = new Set();
    let count = 0;
    for (let word of words) {
        let even = [], odd = [];
        for (let i = 0; i < word.length; i++) {
            if (i % 2) odd.push(word[i]);
            else even.push(word[i])
        }
        even = even.sort().join('');
        odd = odd.sort().join('');

        if (!set.has(even + odd)) count++;
        set.add(even + odd);
    }
    return count
};

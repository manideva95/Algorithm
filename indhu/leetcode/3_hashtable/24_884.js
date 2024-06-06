// https://leetcode.com/problems/uncommon-words-from-two-sentences/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let result = [];
    let map = new Map();
    s1.concat(' ', s2).split(' ').forEach(el => map.set(el, (map.get(el) || 0) + 1))
    map.forEach((val, key) => val === 1 ? result.push(key) : null)
    return result
};

const result = uncommonFromSentences("this apple is sweet", "this apple is sour")
console.log(result);

// Observation:
// output Time Complexity : O(n)
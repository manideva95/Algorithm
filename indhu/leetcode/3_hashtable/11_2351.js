// https://leetcode.com/problems/first-letter-to-appear-twice/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let map = new Map();
    for (let c of s) {
        if (map.has(c)) return c;
        else map.set(c, c)
    }
};

const result = repeatedCharacter('abcadd')
console.log(result);

// Observation:
// output Time Complexity : O(n)
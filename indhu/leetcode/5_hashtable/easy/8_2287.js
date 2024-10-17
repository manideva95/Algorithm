// https://leetcode.com/problems/rearrange-characters-to-make-target-string/

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    let j = 0;
    let count = 0
    while (j < target.length) {
        if (s.includes(target[j])) s = s.replace(target[j], '')
        else break;
        j++
        if (j == target.length) {
            count++;
            j = 0
        }
    }
    return count
};

const result = rearrangeCharacters('abbaccaddaeea', 'ab')
console.log(result);

// Observation:
// output Time Complexity : O(n)
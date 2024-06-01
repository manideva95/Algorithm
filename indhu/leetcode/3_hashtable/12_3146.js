// https://leetcode.com/problems/permutation-difference-between-two-strings/#:~:text=The%20permutation%20difference%20between%20s,difference%20between%20s%20and%20t%20.
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    const map = new Map();
    t.split('').forEach((item, index) => map.set(item, index));
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count = count + Math.abs(map.get(s[i]) - i)
    }
    return count;
};

const result = findPermutationDifference('a', 'a')
console.log(result);

// Observation:
// output Time Complexity : O(n)
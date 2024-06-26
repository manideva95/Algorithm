// https://leetcode.com/problems/assign-cookies/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = 0, j = 0;
    while (i < g.length) {
        while (j < s.length && g[i] > s[j]) {
            j = j + 1;
        }
        if (j == s.length) break;
        i++
        j++
    }

    return i;
};
const result = findContentChildren([1, 2, 3], [1, 0, 1])
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)
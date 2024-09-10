// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    if (word.length < 9) return word.length;

    let map = new Map(), result = 0, j = 0;
    for (let c of word) map.set(c, (map.get(c) || 0) + 1);

    if (map.size < 9) return word.length;

    const sort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    for (let [k, v] of sort) {
        result += v * (Math.floor(j / 8) + 1)
        j++;
    }
    return result;
};
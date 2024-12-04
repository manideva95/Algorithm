// https://leetcode.com/problems/custom-sort-string/description/

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let map = new Map(), result = '';
    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (let c of order) {
        let val = map.get(c);
        if (val) {
            result = result.padEnd(val + result.length, c);
            map.delete(c);
        }
    }
    for (let [k, v] of map) {
        result = result.padEnd(v + result.length, k)
    }
    return result
};
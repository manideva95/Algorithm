// https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const map = new Map(), bucket = new Map();
    let result = '';
    for (let c of s) map.set(c, (map.get(c) || 0) + 1);
    map.forEach((v, k) => {
        let val = bucket.get(v);
        if (val) {
            val.push(k);
            bucket.set(v, val);
        }
        else bucket.set(v, [k])
    });
    const sortedKeys = [...bucket.keys()].sort((a, b) => b - a);
    for (let key of sortedKeys) {
        let val = bucket.get(key).sort();
        val.forEach(item => result = result.padEnd(result.length + key, item))
    }
    return result
};

const result = frequencySort('cccaaa')
console.log(result);
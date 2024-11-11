// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    console.log(strs.length)
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sort = strs[i].split('').sort().join('')
        const val = map.get(sort) || [];
        val.push(strs[i]);
        map.set(sort, val);
    }
    return [...map.values()]

    // Alternate
    const anagramMap = new Map();
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

    for (let str of strs) {
        let key = 1;
        for (let char of str) {
            key *= primes[char.charCodeAt(0) - 97];
        }

        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key).push(str);
    }

    return Array.from(anagramMap.values());
};
// https://leetcode.com/problems/count-common-words-with-one-occurrence/
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let count = 0;
    let map1 = new Map();
    let map2 = new Map();
    for (let word of words1) {
        saveOccurrence(map1, word)
    }
    for (let word of words2) {
        saveOccurrence(map2, word)
    }
    for (let [key, value] of map1.size > map2.size ? map2 : map1) {
        if ((map1.size > map2.size ? map1 : map2).get(key) == 1 && value == 1) count++
    }
    return count
};

const saveOccurrence = (map, key) => {
    let val = map.get(key);
    if (val) map.set(key, ++val);
    else map.set(key, 1)
}


const result = countWords(["a"], ["a"])
console.log(result);

// Observation:
// output Time Complexity : O(n)
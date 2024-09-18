// https://leetcode.com/problems/groups-of-special-equivalent-strings/

/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
    const map = new Map(), result = new Map();
    words.forEach(word => map.set(word, word));
    words.forEach(word => {
        let split = word.split('');
        word

    })
};

const result = numSpecialEquivGroups(4009)
console.log(result);
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let map = new Map()
    for (let letter of s) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1)
        } else {
            map.set(letter, 1)
        }
    }
   return new Set([...map.values()]).size === 1
};


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var areOccurrencesEqual = function (s) {
//     let map = new Map()
//     for (let letter of s) {
//         if (map.has(letter)) {
//             map.set(letter, map.get(letter) + 1)
//         } else {
//             map.set(letter, 1)
//         }
//     }
//     let arr = [...map.values()]
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] == arr[i + 1]) {
//             continue
//         } else {
//             return false
//         }
//     }
//     return true
// };
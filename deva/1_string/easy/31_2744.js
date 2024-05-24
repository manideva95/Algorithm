// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

var maximumNumberOfStringPairs = function (words) {
    let set = new Set(words.map((word) => word.split("").sort().join("")))
    return words.length - set.size
};

// var maximumNumberOfStringPairs = function (words) {
//     let pair = 0
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i].split("").reverse().join("")
//         for (let j = i + 1; j < words.length; j++) {
//             if (word == words[j]) {
//                 pair++
//             }
//         }
//     }
//     return pair
// };
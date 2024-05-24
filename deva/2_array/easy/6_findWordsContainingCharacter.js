// https://leetcode.com/problems/find-words-containing-character/

var findWordsContaining = function (words, x) {
    let indices = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indices.push(i)
        }
    }
    return indices
};

console.log(shuffle(["abc", "bcd", "aaaa", "cbc"], "a"))

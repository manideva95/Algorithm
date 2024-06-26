// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let split = sentence.split(' ')
    for (let w = 0; w < split.length; w++) {
        if (split[w].length >= searchWord.length) {
            let word = split[w].slice(0, searchWord.length);
            let i = 0; j = searchWord.length, valid = true;
            while (i <= j) {
                if (word[i] !== searchWord[i] || word[j] !== searchWord[j]) {
                    valid = false; break;
                }
                i++; j--;
            }
            if (valid) return w + 1;
        }
    }
    return -1
};
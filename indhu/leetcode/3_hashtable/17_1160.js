// <!-- https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/ -->
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let count = 0;
    for (let word of words) {
        if (word.length <= chars.length) {
            let charsCopy = chars;
            for (let c of word) {
                if (charsCopy.includes(c)) {
                    charsCopy = charsCopy.replace(c, '');
                } else break
            }
            if (chars.length - charsCopy.length === word.length)
                count = count + word.length
        }
    }
    return count
};

const result = countCharacters(["O"], 'o')
console.log(result);

// Observation:
// output Time Complexity : O(n^2)
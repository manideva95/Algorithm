// https://leetcode.com/problems/unique-morse-code-words/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let map = new Map();
    let ascii = 97;
    morseCode.forEach((code) => {
        map.set(String.fromCodePoint(ascii), code);
        ascii++;
    });

    let uniqueCode = new Set()
    for (let word of words) {
        let morseWordArr = word.split("").map((letter) => map.get(letter));
        uniqueCode.add(morseWordArr.join(""))
    }
    console.log(uniqueCode.size)
    return uniqueCode.size
};
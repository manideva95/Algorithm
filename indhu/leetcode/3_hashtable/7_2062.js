// https://leetcode.com/problems/count-vowel-substrings-of-a-string/
/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
    let set = new Set(['a', 'e', 'i', 'o', 'u']);
    let set2 = new Set();

    let subString = ``;
    for (let i = 0; i < word.length; i++) {
        if (set.has(word[i])) {
            subString = subString + word[i]
            if ((i + 1) == word.length) {
                let checkSubString = new Set(subString.split(''));
                if (checkSubString.size === 5) set2.add(subString, subString);
            }
        } else {
            let checkSubString = new Set(subString.split(''));
            if (checkSubString.size === 5) set2.add(subString, subString);
            subString = ''
        }
    }
    let count = 0;
    [...set2.keys()].forEach(element => {
        for (let i = 0; i < element.length; i++) {
            let subString = ''
            let j = i
            do {
                subString = subString + element[j]
                if (new Set(subString.split('')).size === 5) count++
                j++
            } while (j < element.length)
        }
    });
    return count

    // Alternate

    // let count = 0;
    const vowelSet = new Set();
    for (i = 0; i < word.length; i++) {
        vowelSet.clear();
        for (j = i; j < word.length; j++) {
            let letter = word.charAt(j);
            if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
                vowelSet.add(letter);
                if (vowelSet.size == 5) {
                    count += 1;
                }
            } else {
                break;
            }
        }
    }
};

const result = countVowelSubstrings("uieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieao")
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)
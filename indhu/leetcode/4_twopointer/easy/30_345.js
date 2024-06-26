// https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let i = 0, j = s.length - 1, split = s.split('');
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    while (i < j) {
        console.log(split[i], split[j]);
        if (set.has(split[i])) {
            if (set.has(split[j])) {
                [split[i], split[j]] = [split[j], split[i]]
                i++;
            } j--;
        } else i++;
    }
    return split.join('')
};

const result = reverseVowels('453leet-cOdE')
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/letter-case-permutation/description/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let arr = [];
    let set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
    const backtrack = (str, i) => {

        while (set.has(s[i])) {
            str += s[i]
            i++;
        }

        if (s.length === str.length) return arr.push(str)

        backtrack(str + s[i].toLowerCase(), i + 1);
        backtrack(str + s[i].toUpperCase(), i + 1);


    }
    backtrack('', 0);
    return arr
};

const result = letterCasePermutation('a1234c')
console.log(result);
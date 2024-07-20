// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    // s = s.split('');
    // let i = 0;
    // while (i < s.length) {
    //     if (s[i] === s[i + 1]) {
    //         s.splice(i, 2)
    //         i = i - 1
    //     } else i++;
    // }
    // return s.join('')

    // Alternate

    let result = [];
    for (let c of s) {
        if (result[result.length - 1] === c) {
            result.pop()
        } else result.push(c)
    }
    return result.join('')
};

const result = removeDuplicates("zabbaze")
console.log(result);

// Observation:
// output Time Complexity : O(n)
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let result = [];
    let substring = ''
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let j = s.length - 1;
        substring = substring + s[i]
        while (j > i) {
            if (count - 1 >= j) break;
            if (s[i] == s[j]) {
                count = j + 1;
                break;
            }
            j--;
        }
        if (count - 1 == i || (new Set(substring.split('')).size == substring.length && count == 0)) {
            result.push(substring.length);
            substring = '';
            count = 0;
        }
    }
    return result.length ? result : [s.length]
};

const result = partitionLabels("eccbbbbdecxz")
console.log(result);

// Observation:
// output Time Complexity : O(n log n)
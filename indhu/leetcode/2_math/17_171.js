// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let sum = 0; let i = 0;
    while (i < columnTitle.length) {
        sum = (sum * 26) + (columnTitle.charCodeAt(i) - 64)
        i++
    }
    return sum
};

const result = titleToNumber('MMM')
console.log(result);


// Observation:
// output Time Complexity : O(n)
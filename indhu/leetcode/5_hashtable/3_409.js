// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let newObj = [];
    let count = 0;
    for (let c of s) {
        const findInfo = newObj.findIndex(item => item.key === c);
        if (findInfo > -1) {
            newObj[findInfo].value = newObj[findInfo].value + 1;
        } else newObj.push({
            key: c,
            value: 1
        })
    }
    for (let obj of newObj) {
        if (obj.value !== 1) {
            count = count + (obj.value % 2 ? (obj.value - 1) : obj.value)
        }
    }
    return s.length == count ? count : count + 1;

    // Alternate

    const charCounts = new Map();
    let numOddChars = 0;

    for (let char of s) {
        const count = charCounts.get(char) || 0;
        charCounts.set(char, count + 1);

        numOddChars = ((count + 1) % 2 === 1) ? numOddChars + 1 : numOddChars - 1;
    }

    return numOddChars > 0 ? s.length - (numOddChars - 1) : s.length;
}

const result = longestPalindrome('a')
console.log(result);

// Observation:
// output Time Complexity : O(n)
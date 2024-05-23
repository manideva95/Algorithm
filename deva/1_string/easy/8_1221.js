// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let rCount = 0
    let lCount = 0
    let totalCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "R") {
            rCount++
        } else if (s[i] == "L") {
            lCount++
        }
        if(rCount == lCount){
            totalCount++
            rCount = 0
            lCount = 0
        }
    }
    return totalCount
};
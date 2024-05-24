// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
var maxDepth = function (s) {
    function isNumber(value) {
        var z1 = /^[0-9]*$/;
        return z1.test(value)
    }

    let maxDepth = 0
    let maxNo = 0
    let map = new Map()
    for (let letter of s) {
        maxNo = letter
        map.set(maxDepth, maxNo)
        if (letter == "(") {
            maxDepth++
        } else if (letter == ")") {
            maxDepth--
        }
        console.log(map)
    }
    return Math.max(...map.keys())
};
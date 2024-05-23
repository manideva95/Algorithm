// https://leetcode.com/problems/remove-outermost-parentheses

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let result = '';
    let openCount = 0;

    for (let char of s) {
        if (char === '(') {
            if (openCount > 0) {
                result += '(';
            }
            openCount++;
        } else { // char === ')'
            openCount--;
            if (openCount > 0) {
                result += ')';
            }
        }
    }

    return result;
}


// var removeOuterParentheses = function (s) {
//     let openBracketCount = 0
//     let closeBracketCount = 0
//     let arr = []
//     let lastSlicedPosition = 0
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == "(") {
//             openBracketCount++
//         } else if (s[i] == ")") {
//             closeBracketCount++
//         }
//         if (openBracketCount == closeBracketCount) {
//             arr.push(s.slice(lastSlicedPosition, i + 1))
//             lastSlicedPosition = i + 1
//         }
//     }
//     let result = ""
//     for (let element of arr) {
//         result += element.slice(1, element.length - 1)
//     }
//     console.log(result)
//     return result
// };
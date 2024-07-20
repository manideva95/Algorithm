// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let result = [], sum = 0;
    for (let c of operations) {
        let len = result.length ? result.length - 1 : 0
        if (c === 'C') {
            sum ? sum -= result[len] : null
            result.pop();
        } else if (c === 'D') {
            sum += result[len] * 2
            result.push(result[len] * 2);
        } else if (c === '+') {
            sum += result[len] + result[len - 1]
            result.push(result[len] + result[len - 1])
        } else {
            result.push(parseInt(c))
            sum += parseInt(c)
        }
    }
    return sum
};
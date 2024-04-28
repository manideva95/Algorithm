// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
    let result = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
        }
        result = Math.max(sum, result)
    }
    return result
};

console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))

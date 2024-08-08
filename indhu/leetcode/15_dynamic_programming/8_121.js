// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min, max = 0, result = 0

    for (let i = 0; i < prices.length; i++) {

        if (min === undefined)
            min = prices[i]
        else if (min !== undefined && max && min > prices[i]) {
            min = prices[i];
            max = 0;
        } else if (min !== undefined && min > prices[i])
            min = prices[i]
        else if (min !== undefined && max < prices[i])
            max = prices[i];

        if (result < (max - min)) result = max - min
    }

    return result;

};
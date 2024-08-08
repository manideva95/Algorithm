// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2])
    }

    return Math.min(cost[0], cost[1]);
};

const result = minCostClimbingStairs([10, 15, 40, 100])
console.log(result);
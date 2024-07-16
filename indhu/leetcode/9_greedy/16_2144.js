// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/description/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let minCost = 0;
    for (let i = 0; i < cost.length; i = i + 3) {
        if (cost[i + 1]) minCost += cost[i + 1] + cost[i];
        else minCost += cost[i]
    }
    return minCost
};

const result = minimumCost([1, 2, 3])
console.log(result);

// Observation:
// output Time Complexity : O(n)
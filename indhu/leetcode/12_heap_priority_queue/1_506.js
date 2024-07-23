// https://leetcode.com/problems/relative-ranks/description/

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let ranks = [...score].sort((a, b) => b - a);
    let map = new Map();
    ranks.forEach((item, i) => map.set(item, i))

    for (let i = 0; i < score.length; i++) {
        if (score[i] === ranks[0]) score[i] = "Gold Medal"
        else if (score[i] === ranks[1]) score[i] = "Silver Medal"
        else if (score[i] === ranks[2]) score[i] = "Bronze Medal"
        else score[i] = (map.get(score[i]) + 1).toString();
    }

    return score
};

const result = findRelativeRanks([1, 2, 5, 4, 3])
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)
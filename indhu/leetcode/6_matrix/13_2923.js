// https://leetcode.com/problems/find-champion-i/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
    let max = 0, maxindex = 0;
    grid.forEach((item, index) => {
        let sum = item.reduce((a, b) => a + b, 0);
        if (max < sum) {
            max = sum; maxindex = index;
        }
    })
    return maxindex;
};

const result = findChampion([[0, 0, 1], [1, 0, 1], [0, 1, 1]])
console.log(result);

// Observation:
// output Time Complexity : O(n)
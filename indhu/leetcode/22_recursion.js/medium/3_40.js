// https://leetcode.com/problems/combination-sum-ii/description//

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];

    function recursive(sum, index, arr) {
        if (sum > target) {
            return;
        }

        if (sum === target) {
            res.push(arr);
            return;
        }

        for (let i = index; i < candidates.length; i++) {

            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (target < sum) {
                break;
            }
            recursive(sum + candidates[i], i + 1, arr.concat(candidates[i]));
        }
    }

    recursive(0, 0, []);
    return res;
};

console.log(combinationSum2([2, 5, 2, 1, 2], 5));

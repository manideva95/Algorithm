// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // let ans = [];
    // const multiSum = (sum, i, arr) => {
    //     let temp = sum, res = [...arr]
    //     for (let j = i; j < target; j++) {
    //         temp += candidates[i];
    //         if (temp > target) break;
    //         res.push(candidates[i]);
    //         if (temp === target) ans.push(res);
    //         if (temp < target)
    //             recursion(temp, (i + 1), res)
    //     }
    // }
    // const recursion = (sum, i, arr) => {
    //     let temp = sum, res = [...arr]
    //     for (let j = i; j < candidates.length; j++) {
    //         temp += candidates[j];
    //         if (temp > target) break;
    //         res.push(candidates[j])
    //         if (temp === target) ans.push(res);
    //         if (temp < target)
    //             multiSum(temp, j, res);
    //     }
    // }
    // for (let i = 0; i < candidates.length; i++) {
    //     if (candidates[i] === target) ans.push([candidates[i]])
    //     else if (candidates[i] < target) {
    //         multiSum(candidates[i], i, [candidates[i]]);
    //         recursion(candidates[i], (i + 1), [candidates[i]]);
    //     }
    // }
    // return ans

    const res = [];

    function makeCombination(idx, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop();
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;
};


console.log(combinationSum([4, 8, 9, 13], 40));

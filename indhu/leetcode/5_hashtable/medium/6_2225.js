// https://leetcode.com/problems/find-players-with-zero-or-one-losses/

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let map = new Map();
    let result = [[], []];
    for (let [i, j] of matches) {
        let val = map.get(i) || [0, 0];
        val[0]++;
        map.set(i, val);
        val = map.get(j) || [0, 0];
        val[1]++;
        map.set(j, val)
    }
    for (let [k, v] of map) {
        if (v[1] === 0) result[0].push(k);
        if (v[1] === 1) result[1].push(k)
    }
    result[0].sort((a, b) => a - b); result[1].sort((a, b) => a - b)
    return result;
};

// const sort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[i - 1]) {
//             [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
//             let j = i - 2, k = i - 1;
//             while (arr[j] > arr[k]) {
//                 [arr[j], arr[k]] = [arr[k], arr[j]];
//                 j--;
//                 k--;
//             }
//         }
//     }
// }
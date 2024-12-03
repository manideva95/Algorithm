// https://leetcode.com/problems/merge-intervals/description/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    let ans = [];
    arr.sort((a, b) => a[0] - b[0]);
    let prev;
    for (let i = 0; i < arr.length; i++) {
        if (prev >= arr[i][0] && prev >= arr[i][1]) {
            continue
        }
        else if ((prev >= arr[i][0])) {
            prev = arr[i][1]
            ans[ans.length - 1][1] = arr[i][1]
        }
        else {
            prev = arr[i][1]
            ans.push(arr[i])
        }
    }
    return ans
};
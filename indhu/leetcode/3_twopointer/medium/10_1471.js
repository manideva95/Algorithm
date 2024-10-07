// https://leetcode.com/problems/the-k-strongest-values-in-an-array/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
    // let mid = arr.sort((a, b) => b - a);
    // mid = arr.length % 2 ? mid[Math.floor((arr.length - 1) / 2)] : mid[Math.floor(arr.length / 2)];

    // let i = 0, j = arr.length - 1, result = [], map = new Map();
    // while (i <= j && result.length <= k) {
    //     let ival = map.get(Math.abs(arr[i] - mid));
    //     ival ? ival.push(arr[i]) : ival = [arr[i]]
    //     map.set(Math.abs(arr[i] - mid), ival);

    //     let jval = map.get(Math.abs(arr[j] - mid));
    //     jval ? jval.push(arr[j]) : jval = [arr[j]]
    //     map.set(Math.abs(arr[j] - mid), jval);
    //     i++; j--
    // }
    // const mapSort = new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
    // for (let [k, v] of mapSort) {
    //     result.push(...v.sort((a, b) => b - a))
    // }
    // return result.splice(0, k)

    const n = arr.length;

    arr.sort((a, b) => a - b);

    let left = 0;
    let right = n - 1;

    const idx = Math.floor((n - 1) / 2);
    const median = arr[idx];

    const res = [];

    while (k > 0) {
        const leftNum = arr[left];
        const rightNum = arr[right];

        const leftStr = Math.abs(leftNum - median);
        const rightStr = Math.abs(rightNum - median);

        if ((leftStr > rightStr) || (leftStr === rightStr && leftNum > rightNum)) {
            res.push(leftNum);
            left++;
        }
        else {
            res.push(rightNum);
            right--;
        }
        k--;
    }

    return res;
};
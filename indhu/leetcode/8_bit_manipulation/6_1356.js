// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    //   let map = new Map(), result =[];

    //     arr.forEach(num => {
    //         let bitsCount = num.toString(2).replaceAll('0', '').length;
    //         let val = map.get(bitsCount) || []
    //         val.push(num);
    //         map.set(bitsCount, val)
    //     });
    //      map.forEach((v)=>result.push(...v.sort((a,b)=>a-b)))
    //     return result

    const n = arr.length;
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = countBit(arr[i]) * 10001 + arr[i];
    }
    res.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        res[i] %= 10001;
    }
    return res;
};
function countBit(n) {
    let res = 0;
    while (n !== 0) {
        res += (n & 1);
        n >>= 1;
    }
    return res;
}
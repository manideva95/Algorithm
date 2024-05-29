// https://leetcode.com/problems/xor-operation-in-an-array/

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    // let arr = []
    // let xor;
    // for (let i = 0; i < n; i++) {
    //     arr.push(start + 2 * i);
    //     if (i) xor = xor ^ arr[i];
    //     else xor = arr[i];
    // }
    // return xor

    // Alternate

    let res = 0;
    for (let i = 0; i < n; i++) {
        let t = start + 2 * i;
        res = res ^ t;
    }
    return res;
};

const result = xorOperation(1, 0)
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/find-the-k-or-of-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
    // let bits = [], max = 0, result = ''
    // nums.forEach(num => {
    //     num = num.toString(2).split('').reverse().join('')
    //     bits.push(num)
    //     max = Math.max(max, num.length);
    // })

    // for (let i = 0; i < max; i++) {
    //     let j = 0, count = 0;
    //     while (j < nums.length) {
    //         if (bits[j][i] === '1') count++;
    //         j++
    //     }
    //     result = count >= k ? result + '1' : result + '0'
    // }
    // result = result.split('').reverse().join('')
    // return parseInt(result, 2)

    let mask = new Array(32).fill(0), val = '';

    nums.forEach(v => {

        let p = 0;
        while (v) {
            if (v & 1) mask[p]++;
            v = v >> 1;
            p++;
        }
    });

    console.log(mask);
    while (mask.length) val = val + (mask.pop() >= k ? 1 : 0);
    return parseInt(val, 2);

};

const result = findKOr([7, 12, 9, 8], 4)
console.log(result);

// Observation:
// output Time Complexity : O(n)
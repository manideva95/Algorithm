// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
    let xor = [0], result = 0;

    for (let i = 0; i < arr.length; i++) {
        xor.push(xor[xor.length - 1] ^ arr[i])
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j; k < arr.length; k++) {
                if ((xor[i] ^ xor[j]) === (xor[j] ^ xor[k + 1])) result++
            }
        }
    }
    return result

};

const result = countTriplets([2, 3, 1, 6, 7])
console.log(result);
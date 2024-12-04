// https://leetcode.com/problems/prime-in-diagonal/
/**
 * @param {number[][]} nums
 * @return {number}
 */

function checkIsPrime(num) {
    const sqrtNum = Math.sqrt(num);

    for (let idx = 2; idx <= sqrtNum; idx++) {
        if (num % idx === 0) return false;
    }

    return num > 1;
}
var diagonalPrime = function (nums) {

    // let arr = [];
    // let maxPrime = 0;
    // for (let i = 0; i < nums.length; i++) {
    //   for (let j = 0; j < nums[i].length; j++) {
    //     if (i == j || (i + j) - (nums.length - 1) == 0) arr.push(nums[i][j])
    //   }
    // }
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] % 2 !== 0 || arr[i] > 1) {
    //     let k = 3;
    //     if (arr[i] == 2 || arr[i] == 3) {
    //       maxPrime = Math.max(maxPrime, arr[i])
    //       continue
    //     }
    //     while (k < arr[i]) {
    //       if (arr[i] % k == 0) break;
    //       if (k === (arr[i] - 2)) maxPrime = Math.max(maxPrime, arr[i])
    //       k = k + 2;
    //     }
    //   }
    // }
    // return maxPrime
    let maxPrimeNum = 0;

    for (let idx = 0; idx < nums.length; idx++) {
        const firstNum = nums[idx][idx], secondNum = nums[idx][nums.length - idx - 1];

        if (checkIsPrime(firstNum)) maxPrimeNum = Math.max(maxPrimeNum, firstNum);
        if (checkIsPrime(secondNum)) maxPrimeNum = Math.max(maxPrimeNum, secondNum);
    }

    return maxPrimeNum;
};

const result = diagonalPrime([[1, 2, 3], [5, 6, 7], [9, 10, 11]])
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    // let sumOfNum = 0;
    // let sumOfDigit = 0;
    // for (let num of nums) {
    //     sumOfNum = sumOfNum + num;
    //     for (digit of num.toString()) {
    //         sumOfDigit = sumOfDigit + parseInt(digit)
    //     }
    // }
    // return Math.abs(sumOfNum - sumOfDigit)

    // Alternate
    let sumOfNumbers = 0;
    let sumOfDigits = 0;

    function sumDigits(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    for (let i = 0; i < nums.length; i++) {
        sumOfNumbers += nums[i];
        sumOfDigits += sumDigits(nums[i]);
    }

};

const result = differenceOfSum([0, 0, 0, 0])
console.log(result);

// Observation:
// output Time Complexity :
// https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    //creating the function to get the max element of array
    function max(arr) {
        return Math.max(...arr);
    }
    //creating a sum function that will return the sum of element of arr from low to high divide by the mid(threshold)
    function sum(arr, div) {
        let sum = 0;
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            sum = sum + Math.ceil(arr[i] / div);
        }
        return sum;
    }
    //using the binary search to shorten the solution set
    let low = 1;
    let high = max(nums);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (sum(nums, mid) <= threshold) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

let arr = [45, 22, 33, 11, 1, 55];
let limit = 5;
let ans = smallestDivisor(arr, limit);
console.log("The minimum divisor is:", ans);

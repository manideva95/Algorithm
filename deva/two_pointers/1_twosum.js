// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
    // Sort the array to use two pointers
    let sortedNums = [...nums].sort((a, b) => a - b);
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        let sum = sortedNums[left] + sortedNums[right];
        if (sum === target) {
            // Find indices of two numbers in the original array
            let index1 = nums.indexOf(sortedNums[left]);
            let index2 = nums.lastIndexOf(sortedNums[right]);
            return [index1, index2];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // for (let i = 1; i <= nums.length; i++) {
    //     console.log(nums, 1)
    //     if (nums[i] < nums[i - 1]) {
    //         [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
    //         let j = i - 2;
    //         let k = i - 1;
    //         while (nums[j] > nums[k]) {
    //             console.log(nums, nums[j], nums[k]);
    //             [nums[j], nums[k]] = [nums[k], nums[j]];
    //             j--;
    //             k--;
    //         }
    //     }
    // }
    // return nums
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            mid++; low++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--
        }
    }
    return nums
};

console.log(sortColors([1, 2]));

// 3, 4, 8

//0, 0, 1, 0, 1, 1,1, 2, 0, 2, 2

// 0, 0, 0 ,1, 1,1 , 1, 2, 0, 2, 2
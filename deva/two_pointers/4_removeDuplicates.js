// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function (nums) {
    let left = 1
    let right = 1
    while (right < nums.length) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right]
            // console.log(nums[left])
            left++
            right++
            // console.log(left, right)
        } else {
            right++
        }
    }
    console.log(left)
    return left
};

console.log(removeDuplicates([1, 1, 2]))

// [0,1,2,3,4,_,_,_,_,_]



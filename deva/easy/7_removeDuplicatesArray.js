//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//26. Remove Duplicates from Sorted Array


var removeDuplicates = function (nums) {
    var n = nums.length;
    var x = nums[0], index = 1, newArr = [nums[0]];
    for (var i = 1; i < n; i++) {
        if (nums[i] !== x) {
            nums[index] = nums[i];
            index++;
            x = nums[i];
        }
    }
    return index
};


console.log(removeDuplicates([1, 1, 2, 2, 3, 4]))
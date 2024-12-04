// https://leetcode.com/problems/sort-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 1) return nums
    return mergeSort(nums, 0, nums.length - 1)
};

const mergeSort = (arr, start, end) => {
    if (start === end) return
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
    return arr
}

const merge = (arr, start, mid, end) => {
    let temp = [];
    let left = start;
    let right = mid + 1;

    while (left <= mid && right <= end) {
        if (arr[left] < arr[right]) {
            temp.push(arr[left]);
            left++
        } else {
            temp.push(arr[right])
            right++
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++
    }

    while (right <= end) {
        temp.push(arr[right]);
        right++
    }
    for (let i = start; i <= end; i++) {
        arr[i] = temp[i - start]
    }
}

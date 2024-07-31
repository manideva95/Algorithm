// https://leetcode.com/problems/minimum-common-value/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const binarySearch = (arr, val, start, end) => {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return true;
    if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1)
    else return binarySearch(arr, val, mid + 1, end)
}
var getCommon = function (nums1, nums2) {
    // let set = new Set(nums1);
    // for(let n of nums2){
    //     if(set.has(n)) return n
    // }
    // return -1

    for (let num of nums1) {
        if (binarySearch(nums2, num, 0, nums2.length)) return num
    }
    return -1
};
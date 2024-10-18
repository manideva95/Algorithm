// https://leetcode.com/problems/merge-sorted-array/description/

// Topics
// Array
// Two Pointers
// Sorting

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
         int nums1Length = m - 1;
        int nums2Length = n - 1;
        int nums2Pointer = m + n - 1;
        //checking last index of nums2 with nums1 to fill the empty in nums1
        while (nums2Length >= 0) {
            if (nums1Length >= 0 && nums1[nums1Length] > nums2[nums2Length]) {
                nums1[nums2Pointer--] = nums1[nums1Length--];
            } else {
                nums1[nums2Pointer--] = nums2[nums2Length--];
            }
        }
    }
    }
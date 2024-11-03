// https://leetcode.com/problems/find-common-elements-between-two-arrays/description/

// Topics
// Array
// Hash Table

class Solution {
    public int[] findIntersectionValues(int[] nums1, int[] nums2) {
       int sum1 = 0, sum2 = 0;
        for(int i = 0; i < nums1.length; i++){
            for(int j = 0; j < nums2.length; j++){
                if(nums1[i] == nums2[j]){
                    sum1++;
                    break;
                }
            }
        }
        for(int i = 0; i < nums2.length; i++){
            for(int j = 0; j < nums1.length; j++){
                if(nums2[i] == nums1[j]){
                    sum2++;
                    break;
                }
            }
        }
        return new int[] {sum1, sum2};
    }
}
// https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/description/

// Topics
// Array
// Two Pointers

class Solution {
    public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {
       int[] result = new int[]{-1,-1};
        for(int i = 0 ; i < nums.length ; i++) {
        for(int j = i + indexDifference ; j < nums.length ; j++) {
            if(Math.abs(nums[i] - nums[j])>= valueDifference)   {
                result[0] = i;
                result[1] = j;
                break;
            }
        }
    }
        return result;
    }
}
//Time Complexity : O(n2)
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Topics
// Array
// Two Pointers

//Solve it in-place memory

class Solution {
    public int removeDuplicates(int[] nums) {
       int count=0;
        for(int i=0;i<nums.length;i++){
            if( i< nums.length-1 && nums[i]==nums[i+1]){
             continue;
            }else{
                nums[count]=nums[i];
                count++;
            }
        }
        return count; 
    }
}
//Time Complexity: O(n)
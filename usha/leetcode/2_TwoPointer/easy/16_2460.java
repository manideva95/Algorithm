// https://leetcode.com/problems/apply-operations-to-an-array/description/

//Topics:: Array
// Two Pointers
// Simulation

public class Solution {
    public static int[] applyOperations(int[] nums) {
        for(int i=0; i<nums.length-1;i++){
            if(nums[i]== nums[i+1]){
                nums[i]*=2;
                nums[i+1] =0;
            }
        }
        int count =0;
        for(int i = 0;i<nums.length;i++){
            if(nums[i] != 0){
                int temp = nums[count];
                nums[count] = nums[i];
                nums[i] = temp;
                count++;
            }
        }
        return nums;
    }
        public static void main (String[]args){
            int[] nums = new int[]{847,847,0,0,0,399,416,416,879,879,206,206,206,272};//int[] nums = {1, 2, 3, 4, 5};
            System.out.println("Output====" + Solution.applyOperations(nums));//[1694,399,832,1758,412,206,272,0,0,0,0,0,0,0]
        }
}

//time complexity: O(n)
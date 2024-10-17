// https://leetcode.com/problems/sort-array-by-parity/description/


//topics: Array,Two Pointers,Sorting
public class Solution {
    public static int[] sortArrayByParity(int[] nums) {
        int left =0,right = nums.length-1;
        while(left<right){
            if(nums[left] %2 == 0){
                left++;
            }else if(nums[right]%2 == 0){
                int temp = nums[left];
                nums[left]= nums[right];
                nums[right]= temp;
                left++;
            }else{
                right--;
            }
        }
        return nums;
    }
    public static void main(String[] args) {
           int[] nums = new int[]{3,1,2,4};//int[] nums = {1, 2, 3, 4, 5};
            System.out.println("Output====" + Solution.sortArrayByParity(nums));
        }
    }

//time Complexity: O(n)
    
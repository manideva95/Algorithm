// https://leetcode.com/problems/squares-of-a-sorted-array/

// topics: Array
// Two Pointers
// Sorting


import java.util.Arrays;

public class Solution {
    public static int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int left = 0, right = n-1;
        int[] result = new int[n];

        while(left<=right){
            if(Math.abs(nums[left]) > Math.abs(nums[right])){
                result[n-1] = nums[left]*nums[left];
                left++;
            } else{
                result[n-1] = nums[right]*nums[right];
                right--;
            }
            n--;
        }
        return result;
    }
    public static void main(String[] args) {
           int[] nums = new int[]{-4,-1,0,3,10};//int[] nums = {1, 2, 3, 4, 5};
            System.out.println("Output====" + Solution.sortedSquares(nums));
        }
    }
//time complexity: O(n)
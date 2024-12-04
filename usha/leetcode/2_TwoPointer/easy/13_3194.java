// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/description/


//topics: Array, Two Pointers,Sorting
public class Solution {
    public static double minimumAverage(int[] nums) {
        double result = Double.MAX_VALUE;
        Arrays.sort(nums);
        int left = 0, right = nums.length-1;
        while(left<right){
            double average =  (double) (nums[left] + nums[right]) /2;
            result = Math.min(result,average);
            left++;
            right--;
        }
        return result;
    }
    public static void main(String[] args) {
           int[] nums = new int[]{7,8,3,4,15,13,4,1};//int[] nums = {1, 2, 3, 4, 5};
            System.out.println("Output====" + Solution.minimumAverage(nums));
        }
    }

//time complexity: O(n log n) - sorting n times, pointer loops n/2 times
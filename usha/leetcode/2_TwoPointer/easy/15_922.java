// https://leetcode.com/problems/sort-array-by-parity-ii/description

// topics:
// Array
// Two Pointers
// Sorting

public class Solution {
    public static int[] sortArrayByParityII(int[] nums) {
        int even = 0, odd = 1;
        while (even < nums.length && odd < nums.length) {
            if (nums[even] % 2 != 0) {
                swap(nums, even, odd);
                odd += 2;
            } else even += 2;
        }
        return nums;
    }
        private static void swap ( int[] nums, int i, int j){
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        public static void main (String[]args){
            int[] nums = new int[]{4, 2, 5, 7};//int[] nums = {1, 2, 3, 4, 5};
            System.out.println("Output====" + Solution.sortArrayByParityII(nums));
        }
}

//Time complexity: O(n)
// Follow Up: Could you solve it in-place?
//other approach:
// public int[] sortArrayByParityII(int[] nums) {
//         int[] res = new int[nums.length];
//         int odd = 1, even = 0;

//         for (int i = 0; i < nums.length; i++) {
//             if(nums[i]%2==0){
//                 res[even] = nums[i];
//                 even+=2;
//             }else{
//                 res[odd] = nums[i];
//                 odd+=2;
//             }
//         }

//         return res;
//     }
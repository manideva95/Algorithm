// https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/


// Topics
// Array
// Math

class Solution {
    public int minElement(int[] nums) {
         int minElement = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length; i++) {
            // Replace each element with its digit sum
            int digitSum = getDigitSum(nums[i]);
            // Track the minimum digit sum
            minElement = Math.min(minElement, digitSum);
        }
        return minElement;
    }
    private static int getDigitSum(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10; // Add the last digit
            num /= 10; // Remove the last digit
        }
        return sum;
    }
}
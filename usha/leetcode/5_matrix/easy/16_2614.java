// https://leetcode.com/problems/prime-in-diagonal/description/


// Topics
// Array
// Math
// Matrix
// Number Theory

class Solution {
    public int diagonalPrime(int[][] nums) {
      int maxprime = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i][i] > maxprime && isPrime(nums[i][i])) {
                maxprime = nums[i][i];
            }
             if (nums[i][nums.length-1-i] > maxprime && isPrime(nums[i][nums.length-1-i])) {
                maxprime =  nums[i][nums.length-1-i];
            }
        }
        return maxprime;
    }

    private static boolean isPrime(int num) {
        if (num < 2) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/

// Topics
// Array
// Math

class Solution {
    public static int sumOfEncryptedInt(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += encrypt(num);
        }
        return sum;
    }

    private int encrypt(int x) {
        int maxDigit = 0;
        int temp = x;

        // Find the largest digit in the number
        while (temp > 0) {
            int digit = temp % 10;
            maxDigit = Math.max(maxDigit, digit);
            temp /= 10;
        }

        // Construct the encrypted number
        int encrypted = 0;
        int place = 1;
        while (x > 0) {
            encrypted += maxDigit * place;
            place *= 10;
            x /= 10;
        }
        return encrypted;
    }

    public static void main(String[] args) {
        int[] nums1 = {10, 21, 32};
        System.out.println("Output: " + solution.sumOfEncryptedElements(nums1)); // Output: 6
    }
}
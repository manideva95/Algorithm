// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

// Array
// Math

class Solution {
    public int[] sumZero(int n) {
        int[] result = new int[n];
        int index = 0;

        // Add pairs of integers that sum to 0
        for (int i = 1; i <= n / 2; i++) {
            result[index++] = i;
            result[index++] = -i;
        }

        // If n is odd, add 0 as the last element
        if (n % 2 != 0) {
            result[index] = 0;
        }

        return result;
}
}
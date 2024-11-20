// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

// Topics
// Array
// Math
// Prefix Sum


class Solution {
    public int sumOddLengthSubarrays(int[] arr) {
       int totalSum = 0;
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            int endCount = i + 1;
            int startCount = n - i;
            int totalSubarrays = endCount * startCount;
            int oddSubarrays = (totalSubarrays + 1) / 2;

            // Add the contribution of arr[i] in all odd-length subarrays
            totalSum += oddSubarrays * arr[i];
        }

        return totalSum; 
    }
}
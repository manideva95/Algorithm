// https://leetcode.com/problems/find-if-digit-game-can-be-won/description/

// Topics
// Array
// Math


class Solution {
    public boolean canAliceWin(int[] nums) {
         int singleDigitSum = 0;
        int doubleDigitSum = 0;
        int totalSum = 0;

        // Calculate single-digit, double-digit, and total sums in one pass
        for (int num : nums) {
            totalSum += num;
            if (num < 10) {
                singleDigitSum += num;
            } else {
                doubleDigitSum += num;
            }
        }

        // Calculate Bob's score if Alice picks single-digit or double-digit numbers
        int bobScoreIfAliceChoosesSingleDigit = totalSum - singleDigitSum;
        int bobScoreIfAliceChoosesDoubleDigit = totalSum - doubleDigitSum;

        // Check if Alice can win in either scenario
        return singleDigitSum > bobScoreIfAliceChoosesSingleDigit || 
               doubleDigitSum > bobScoreIfAliceChoosesDoubleDigit;
    }
}
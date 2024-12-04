// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

// Topics
// Array
// Math


class Solution {
    public int differenceOfSum(int[] nums) {
        int elSum = 0;
        int digSum = 0;
        for(int num:nums){
            elSum += num;
            digSum += getDigitSum(num);
        }
        return Math.abs(elSum - digSum);
    }
    int getDigitSum(int num){
        if(num < 10) return num;
        return getDigitSum(num/10) + num%10;
    }
}
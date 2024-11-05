https://leetcode.com/problems/count-the-digits-that-divide-a-number/


class Solution {
    public int countDigits(int num) {
      int count = 0;
        int cur =num;
        while (cur > 0) {
            int digit = cur % 10;
            if (digit != 0) { 
               count += ((num % digit) == 0)?1:0;
            }
            cur /= 10;
        }
        return count;  
    }
}
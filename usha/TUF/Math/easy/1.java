// https://www.naukri.com/code360/problems/count-digits_8416387?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

public class Solution {
    public static int countDigits(int n){
        int count = 0;
        int cur =n;
        while (cur > 0) {
            int digit = cur % 10;
            if (digit != 0) { 
               count += ((n % digit) == 0)?1:0;
            }
            cur /= 10;
        }
        return count;
    }
}
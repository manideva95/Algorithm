// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

class Solution {
    public String firstPalindrome(String[] words) {
        for (String str : words) {
            if (isPalindrome(str)) {
                return str;
            }
        }
        return "";
    }
    private boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
    //     String resutlStr = "";
    //     for(String str : words){
    //         StringBuilder sb = new StringBuilder(str);
    //         if(sb.reverse().toString().equals(str)){
    //             resutlStr = str;
    //             break;
    //         }
    //     }
    //     return resutlStr;
    // }}
// https://leetcode.com/problems/lexicographically-smallest-palindrome/description/


class Solution {
    public String makeSmallestPalindrome(String s) {
        int i=0;
        int j=s.length()-1;
        char[] arr = s.toCharArray();
        while(i<=j){
            if(arr[i]!=arr[j]){
                arr[i] = arr[j] = (char) Math.min(arr[i],arr[j]);
            }
            i++;
            j--;
        }
        return new String(arr);
    }
}
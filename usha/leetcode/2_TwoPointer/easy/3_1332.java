// https://leetcode.com/problems/remove-palindromic-subsequences/description/


class Solution {
    public int removePalindromeSub(String s) {
        int i=0;
        int j=s.length()-1;
        while(i<j){
            if(s.charAt(i++)!= s.charAt(j--)){
                return 2;
            }
        }
        return 1;
    }
}

// timeComplexity: O(n)
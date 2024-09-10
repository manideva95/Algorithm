// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

class Solution {
    public int maxDepth(String s) {
        int result=0;
        int openBracket = 0;
         for(char ch : s.toCharArray()){
            if(ch == '('){
                openBracket++;
            }else if(ch == ')'){
                openBracket--;
            }
            result = Math.max(result,openBracket);
         }
         return result;
    }
}
// https://leetcode.com/problems/remove-outermost-parentheses/


class Solution {
    public String removeOuterParentheses(String s) {
        StringBuilder sb = new StringBuilder();
        int count =0;
        for (int i = 0; i < s.length(); i++) {
            if (count == 0 && s.charAt(i) == '(') {
                count++;
            } else if (s.charAt(i) == '(') {
                count++;
                sb.append(s.charAt(i));
            } else if (count == 1 && s.charAt(i) == ')') {
                count--;
            } else {
                count--;
                sb.append(s.charAt(i));
            }
        }
        return sb.toString();
    }
}


// another approach 
// StringBuilder sb = new StringBuilder();
//         char[] a = s.toCharArray();
//         int n = a.length;
//         int count=0;
//         for(int i= 1;i<n;i++){
//             if(a[i]=='('){
//                 count++;
//                 sb.append('(');
//             }
//             else{
//                 if(count==0){
//                     i++;
//                 }
//                 else{
//                     sb.append(')');
//                     count--;
//                 }
//             }
//         }
//         return sb.toString();
// https://leetcode.com/problems/permutation-difference-between-two-strings/description/

class Solution {
    public int findPermutationDifference(String s, String t) {
        int sum = 0;   
     for(int i = 0; i<s.length(); i++){
        char ch = s.charAt(i);
        int indexofs = i;
        int indexoft = t.indexOf(ch);

        sum = sum + Math.abs(indexofs - indexoft); 
     }
        // int sum = 0;
        // for (int i = 0; i < s.length(); i++) {
        //     for (int j = 0; j < t.length(); j++) {
        //         if(s.charAt(i)==t.charAt(j)){
        //             sum+=Math.abs(i-j);
        //             break;
        //             }
        //     }
        // }
        return sum;
    }
}
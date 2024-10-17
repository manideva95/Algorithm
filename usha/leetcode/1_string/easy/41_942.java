// https://leetcode.com/problems/di-string-match/description/

public class Solution {
    public static  int[] diStringMatch(String s) {
        int[] result = new int[s.length()+1];
        int increase=0;
        int decrease =s.length();

        for(int i=0; i<s.length();i++){
            if(s.charAt(i) == 'I'){
                result[i]=increase++;
            }
            else{
                result[i]=decrease--;
            }
        }
        result[s.length()]=increase;
        return result;
    }
    public static void main(String[] args){
        System.out.println("DI string:"+ Arrays.toString(Solution.diStringMatch("DDI")));
    }
}

//Another Approach: Two Pointer
//Time complexity: O(n) 
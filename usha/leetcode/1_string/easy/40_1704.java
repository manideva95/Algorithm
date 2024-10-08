// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/


class Solution {
    public boolean halvesAreAlike(String s) {
         int strLength = s.length();
        int half1Count =0;
        int half2Count =0;

        String str = s.toLowerCase();
        for(int i=0; i<strLength/2;i++){
            if(str.charAt(i) =='a' || str.charAt(i) =='e' || str.charAt(i) =='i' || str.charAt(i) =='o' || str.charAt(i) =='u'){
                half1Count++;
            }
        }
        for(int i=strLength/2 ;i< strLength;i++){
            if(str.charAt(i) =='a' || str.charAt(i) =='e' || str.charAt(i) =='i' || str.charAt(i) =='o' || str.charAt(i) =='u'){
                half2Count++;
            }
        }
        return half1Count ==half2Count;
    }
}

//Time Complexity : O(n2)
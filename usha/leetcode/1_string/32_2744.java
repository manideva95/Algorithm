// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        int count = 0;
        for(int i=0; i< words.length;i++){
            String revStr = new StringBuilder(words[i]).reverse().toString();
            for(int j=i+1;j<words.length;j++){
                if(revStr.equals(words[j])){
                    count++;
                }
            }
        }
            return count;
    }
}

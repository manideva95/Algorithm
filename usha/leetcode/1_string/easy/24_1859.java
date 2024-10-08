// https://leetcode.com/problems/sorting-the-sentence/description/

class Solution {
    public String sortSentence(String s) {
        String[] words=s.split(" ");
        String[] ans =new String[words.length];
        for(int i=0;i<words.length;i++){
            String word = words[i];
            int wordLength=word.length();
            int index=Character.getNumericValue(word.charAt(wordLength-1));
            ans[index-1]=words[i].substring(0,wordLength-1);
           
        }
        return String.join(" ",ans);
    }
}
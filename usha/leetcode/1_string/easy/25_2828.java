// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/

class Solution {
    public boolean isAcronym(List<String> words, String s) {
        if(s.length()!=words.size()) return false;
        for(int i=0; i<words.size(); i++){
            if(s.charAt(i) != words.get(i).charAt(0)) return false;
        }
        return true;
    }
}

// another approach
        // StringBuilder sb = new StringBuilder();
        // boolean result= false;
        // for( String word: words){
        //     sb.append(word.charAt(0));
        // }
        // if(sb.toString().equals(s)){
        //     result=true;
        // }
        // return result;
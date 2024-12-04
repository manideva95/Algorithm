// https://leetcode.com/problems/unique-morse-code-words/description/

class Solution {
    public int uniqueMorseRepresentations(String[] words) {
       String[] MORSE = new String[]{".-","-...","-.-.","-..",".","..-.","--.",
                         "....","..",".---","-.-",".-..","--","-.",
                         "---",".--.","--.-",".-.","...","-","..-",
                         "...-",".--","-..-","-.--","--.."};

        Set<String> uniqueCode = new HashSet();
        for (String word: words) {
            StringBuilder code = new StringBuilder();
            for (char c: word.toCharArray())
                code.append(MORSE[c - 'a']);
            uniqueCode.add(code.toString());
        }
        return uniqueCode.size(); 
    }
}
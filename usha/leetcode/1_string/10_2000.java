// https://leetcode.com/problems/reverse-prefix-of-word/

class Solution {
    public String reversePrefix(String word, char ch) {
        StringBuilder sb = new StringBuilder();
        int chIndex = word.indexOf(ch);
        if (chIndex != -1) {
            return sb.append(word.substring(0, chIndex + 1)).reverse().toString().concat(word.substring(chIndex + 1));
        }
        return word;
    }
}
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

class Solution {
    public int mostWordsFound(String[] sentences) {
        int maxWords = 0;

        for (String sentence : sentences) {
            int spaces = 0;
            for (char c : sentence.toCharArray()) {
                if (c == ' ') {
                    spaces++;
                }
            }
            maxWords = Math.max(maxWords, spaces + 1);
        }
        return maxWords;
    }
}
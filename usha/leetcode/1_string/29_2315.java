// https://leetcode.com/problems/count-asterisks/description/

class Solution {
    public int countAsterisks(String s) {
        int pipeCount = 0;
        int asterikCount = 0;
        for (char ch : s.toCharArray()) {
            if (ch == '|') {

                pipeCount++;
            }
            if (pipeCount % 2 == 0) {
                if (ch == '*') {
                    asterikCount++;
                }
            }
        }
        return asterikCount;
    }
}
// https://leetcode.com/problems/truncate-sentence/

class Solution {
    public String truncateSentence(String s, int k) {
        String[] splitstr = s.split(" ");
StringBuilder sb = new StringBuilder();
for(int i = 0; i<k; i++){
    sb.append(splitstr[i]).append(" ");
}
return sb.toString().trim();

    }
}
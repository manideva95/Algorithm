//https://leetcode.com/problems/shuffle-string/description/

class Solution {
    public String restoreString(String s, int[] indices) {
        int n= s.length();
        char[] newstr = new char[n];
        for (int i=0;i<n;i++){
            newstr[indices[i]]=s.charAt(i);
        }
        return new String(newstr);
    }
}
// also we can use string builder to form a shuffled str (newStr)
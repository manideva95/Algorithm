// https://leetcode.com/problems/assign-cookies/description/

// Topics
// Array
// Two Pointers
// Greedy
// Sorting

class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int index = 0;
        int count = 0;
        while (index < s.length && count < g.length) {
            if (s[index] >= g[count]) {
                count++;
            }
            index++;
        }
        return count;
    }
}
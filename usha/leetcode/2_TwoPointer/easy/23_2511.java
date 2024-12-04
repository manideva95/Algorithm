// https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/description/

// Topics
// Array
// Two Pointers

class Solution {
    public int captureForts(int[] forts) {
       int ans = 0;
    for (int i = 0, j = 0; i < forts.length; ++i)
        if (forts[i] != 0) {
            if (forts[j] !=0 && forts[i] != forts[j])
                ans = Math.max(ans, i - j - 1);
            j = i;
        }
    return ans;
    }
}
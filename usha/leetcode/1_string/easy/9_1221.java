// https://leetcode.com/problems/split-a-string-in-balanced-strings/

class Solution {
    public int balancedStringSplit(String s) {
        int balance = 0;
    int count = 0;

    for (char c : s.toCharArray()) {
        if (c == 'L') {
            balance++;
        } else {
            balance--;
        }
        if (balance == 0) {
            count++;
        }
    }

    return count;
    }
}
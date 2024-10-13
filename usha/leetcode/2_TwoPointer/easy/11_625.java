// https://leetcode.com/problems/long-pressed-name/

class Solution {
    public boolean isLongPressedName(String name, String typed) {
        final int nameLength = name.length();  // Constant for name length
        final int typedLength = typed.length();  // Constant for typed length

        int i = 0;  // Pointer for name
        int j = 0;  // Pointer for typed

        // Traverse both name and typed
        while (j < typedLength) {
            if (i < nameLength && name.charAt(i) == typed.charAt(j)) {
                // If characters match, move both pointers
                i++;
                j++;
            } else if (j > 0 && typed.charAt(j) == typed.charAt(j - 1)) {
                // If current typed character matches the previous one, it's a long press
                j++;
            } else {
                // Otherwise, the pattern is invalid
                return false;
            }
        }

        // Check if all characters in name were matched
        return i == nameLength;
    }
}
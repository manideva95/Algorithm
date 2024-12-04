// https://leetcode.com/problems/reverse-string/

class Solution {
    public void reverseString(char[] s) {
        int left = 0;
            int right = s.length-1;

            while (left < right){
                char temp = s[left];
                s[left]=s[right];
                s[right]= temp;
                left++;
                right--;
            }
    }
}

//time complexity : o(n)
// You must do this by modifying the input array in-place with O(1) extra memory.
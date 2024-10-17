// https://leetcode.com/problems/reverse-string-ii/description/

public class Solution {
    public static  String reverseStr(String s, int k) {
        char[] arr = s.toCharArray();  
        int n = arr.length;

        for (int i = 0; i < n; i += 2 * k) {
            // Reverse the first k characters (or as many as are left)
            int left = i;  // Start of the current chunk
            int right = Math.min(i + k - 1, n - 1);  // Ensure we do not go out of bounds
            while (left < right) {
                char temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        return new String(arr);
    }

    public static void main(String[] args) {
           String s = "abcdefg";
           int k= 2;
            System.out.println("Output====" + Solution.reverseStr(s,k));
        }
    }
//time complexity: O(n)
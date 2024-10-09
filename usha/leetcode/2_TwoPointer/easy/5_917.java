// https://leetcode.com/problems/reverse-only-letters/

public class Solution {
        public static String reverseOnlyLetters(String s) {
            char[] charArr = s.toCharArray();
            int left = 0, right = s.length() - 1;
            while (left < right) {
                if ( !Character.isLetter(charArr[left])) {
                    left++;
                }
                if (!Character.isLetter(charArr[right])) {
                    right--;
                }
              else{
                    char temp = charArr[left];
                    charArr[left] = charArr[right];
                    charArr[right] = temp;
                    left++;
                    right--;
                }
            }
            return new String(charArr);
        }
        public static void main(String[] args) {
            String s = "ab-cd";
            System.out.println("Output====" + Solution.reverseOnlyLetters(s));//output:dc-ba;j-Ih-gfE-dCba;Qedo1ct-eeLg=ntse-T!
        }
    }
    //time complexity: o(n)
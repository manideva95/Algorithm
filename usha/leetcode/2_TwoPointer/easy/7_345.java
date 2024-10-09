// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

public class Solution {
    public static String reverseVowels(String s) {
        int i=0, j= s.length()-1;
        char[] charArr =s.toCharArray();
        while(i<j){
            if(isVowel(charArr[i]) && (isVowel(charArr[j]))) {
                char temp = charArr[i];
                charArr[i] = charArr[j];
                charArr[j] = temp;
                i++;
                j--;
            }
            else if(!isVowel(charArr[i])){
                    i++;
                }else{
                j--;
            }
        }
        return new String(charArr);
    }

    private static boolean isVowel(char ch) {
        ch = Character.toLowerCase(ch);  // Normalize to lowercase
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }

    public static void main(String[] args) {
           String s = "IceCreAm";
            System.out.println("Output====" + Solution.reverseVowels(s));
        }
    }

    //time complexity : O(n)
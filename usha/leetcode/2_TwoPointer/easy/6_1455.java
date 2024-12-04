// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/

public class Solution {
    public static int isPrefixOfWord(String sentence, String searchWord) {
        String[] str = sentence.split(" ");
       for(int i=0; i<str.length;i++){
           if (str[i].startsWith(searchWord)) {
               return i+1;
           }
       }
       return -1;
        }
        public static void main(String[] args) {
           String sentence = "i am tired", searchWord = "you";
            System.out.println("Output====" + Solution.isPrefixOfWord(sentence,searchWord));
        }
    }
    //time complexity: o(n)
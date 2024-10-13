// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

public class Solution {
    public static int strStr(String haystack, String needle) {
        return haystack.indexOf(needle);
    }

    public static void main(String[] args) {
           String haystack = "abc", needle= "abcd";
            System.out.println("Output====" + Solution.strStr(haystack,needle));
        }
    }
//time complexity: O(1)
//another approach - two pointer:
// public int strStr(String haystack, String needle) {
//         if(needle.isEmpty()){
//             return 0;
//         }
//         if(haystack.length()<needle.length()){
//             return -1;
//         }
//         for (int i=0;i<=haystack.length()-needle.length();i++){
//             if(haystack.substring(i,i+needle.length()).equals(needle)){
//                 return i;
//             }
//         }
//         return -1;
//     }
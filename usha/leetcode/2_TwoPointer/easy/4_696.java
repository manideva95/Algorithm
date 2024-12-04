// https://leetcode.com/problems/count-binary-substrings/description/

import java.util.ArrayList;
import java.util.Arrays;

    public class Solution {
        public static int countBinarySubstrings(String s) {
            int prev = 0, curr = 1, totalCount = 0;

            // Traverse through the string
            for (int i = 1; i < s.length(); i++) {
                if (s.charAt(i) == s.charAt(i - 1)) {
                    curr++;
                } else {
                    totalCount += Math.min(prev, curr);
                    prev = curr;
                    curr = 1;
                }
            }
            totalCount += Math.min(prev, curr);  // Handle the last group comparison

            return totalCount;
        }
        public static void main(String[] args) {
            String s = "00110011";
            System.out.println(Solution.countBinarySubstrings(s));
        }
    }

//time complexity :O(n)
//other Approach: using list

    // public int countBinarySubstrings(String s) {
    //     List<Integer> groups = new ArrayList<>();
    //     int count = 1;

    //     // Step 1: Group consecutive characters
    //     for (int i = 1; i < s.length(); i++) {
    //         if (s.charAt(i) == s.charAt(i - 1)) {
    //             count++;
    //         } else {
    //             groups.add(count);
    //             count = 1;
    //         }
    //     }
    //     groups.add(count);  // Add the last group

    //     // Step 2: Count valid substrings between adjacent groups
    //     int totalCount = 0;
    //     for (int i = 1; i < groups.size(); i++) {
    //         totalCount += Math.min(groups.get(i), groups.get(i - 1));
    //     }

    //     return totalCount;
    // }

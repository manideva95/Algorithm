// https://leetcode.com/problems/richest-customer-wealth/description/

// Topics
// Array
// Matrix

public class Solution {
    public static void main(String[] arg) {
        int[][] accounts = {
//              {1, 2, 3},{3, 2, 1}
                {1, 5}, {7, 3}, {3, 5}
        };
        System.out.println("output:::" + maximumWealth(accounts));
    }

    public static int maximumWealth(int[][] accounts) {
        int max = 0;
        for (int i = 0; i < accounts.length; i++) {
            int sum = 0;
            for (int j = 0; j < accounts[i].length; j++) {
                sum += accounts[i][j];
            }
            max = Math.max(max, sum);
        }
        return max;
    }
}

//Time Complexity: O(n2)
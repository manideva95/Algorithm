// https://leetcode.com/problems/shortest-distance-to-a-character/description/

//BruteForce approach
class Solution {
    public int[] shortestToChar(String s, char c) {
        int n = s.length();
        int[] answer = new int[n];
        ArrayList<Integer> positions = new ArrayList<>();
        
        // Find all the occurrences of the character 'c'
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == c) {
                positions.add(i);
            }
        }
        
        // For each index in the string, find the minimum distance to any occurrence of 'c'
        for (int i = 0; i < n; i++) {
            int minDist = Integer.MAX_VALUE;
            for (int pos : positions) {
                minDist = Math.min(minDist, Math.abs(i - pos));
            }
            answer[i] = minDist;
        }
        
        return answer;
    }
    public static void main(String[] args) {
        String s = "loveleetcode";
        char c = 'e';
        int[] result = shortestToChar(s, c);
        System.out.println(Arrays.toString(result));  // Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
    }
}

//Time Complexity : O(n) 
// for two pointer approach,will have 2 loops one from left to right, one from right to left.
// Two pointer approach:
//  public static int[] shortestToChar(String s, char c) {
//         int n = s.length();
//         int[] answer = new int[n];
        
//         // Step 1: First pass (Left to right)
//         int prev = -n;  // Initialize to a large negative number to ensure large initial distance
//         for (int i = 0; i < n; i++) {
//             if (s.charAt(i) == c) {
//                 prev = i;  // Update the closest 'c' from the left
//             }
//             answer[i] = i - prev;  // Calculate the distance from the closest 'c' on the left
//         }
        
//         // Step 2: Second pass (Right to left)
//         prev = 2 * n;  // Initialize to a large positive number to ensure large initial distance
//         for (int i = n - 1; i >= 0; i--) {
//             if (s.charAt(i) == c) {
//                 prev = i;  // Update the closest 'c' from the right
//             }
//             answer[i] = Math.min(answer[i], prev - i);  // Get the minimum distance from both directions
//         }
        
//         return answer;

// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/

// Topics:: Array
// Two Pointers


class Solution {
    public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
        List<Integer> keyIndices = new ArrayList<>();
        List<Integer> result = new ArrayList<>();
        
        // Step 1: Find all indices where nums[i] == key and store them
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == key) {
                keyIndices.add(i);
            }
        }
        
        // Step 2: Use two-pointer approach to find k-distant indices
        int j = 0; // Pointer to traverse keyIndices
        for (int i = 0; i < nums.length; i++) {
            // Move the pointer j to ensure keyIndices[j] is the smallest index >= i - k
            while (j < keyIndices.size() && keyIndices.get(j) < i - k) {
                j++;
            }
            
            // Check if current i is within k-distance of any key index
            if (j < keyIndices.size() && Math.abs(keyIndices.get(j) - i) <= k) {
                result.add(i);
            }
        }
        
        return result;
    }
}

//time complexity: O(n2)
//Another approach with O(n)
// public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
//         // TreeSet to automatically sort and eliminate duplicates
//         TreeSet<Integer> resultSet = new TreeSet<>();
        
//         // Loop through the array to find all indices where nums[j] == key
//         for (int i = 0; i < nums.length; i++) {
//             if (nums[i] == key) {
//                 // For each key index, add all valid indices within k-distance
//                 for (int j = Math.max(0, i - k); j <= Math.min(nums.length - 1, i + k); j++) {
//                     resultSet.add(j);
//                 }
//             }
//         }
        
//         // Convert TreeSet to ArrayList for returning as a list
//         return new ArrayList<>(resultSet);
//     }
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

// Topics
// Array
// Hash Table

class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> a1 = new ArrayList<>();
        List<Integer> a2 = new ArrayList<>();
        for (int num : nums1)
            set1.add(num);
        for (int num : nums2)
            set2.add(num);
      
        for (int num : set1) {
            if (!set2.contains(num)) {
                a1.add(num);
            }
        }
        result.add(a1);
        for (int num : set2) {
            if (!set1.contains(num)) {
                a2.add(num);
            }
        }
        result.add(a2);
        return result;
    }
}
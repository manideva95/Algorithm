// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

// Topics
// Array
// Math


class Solution {
    public int minimumOperations(int[] nums) {
        int count= 0;
        for(int num : nums){
            if(num % 3 != 0){
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args){
        int[] arr1 = {7, 5, 9, 2, 8};
        System.out.println("operation count :: "+ minimumOperations(arr1));
    }
}
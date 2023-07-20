//https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1/?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    valueEqualToIndex(arr, n) {
        //code here
        return arr.filter((el, ind) => el == ind + 1)
    }

}
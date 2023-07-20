// https://practice.geeksforgeeks.org/problems/swap-two-numbers3844/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    get(a, b) {
        a = a + b;
        b = a - b;
        a = a - b;
        console.log(a, b);
        return [a, b];
    }
}
new Solution().get(3, 4);
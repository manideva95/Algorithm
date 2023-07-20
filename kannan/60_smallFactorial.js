// https://practice.geeksforgeeks.org/problems/small-factorial0854/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    find_fact(n) {
        let output = 1;
        for (let i = 1; i <= n; i++) {
            output = output * i;
        }
        console.log(output);
        return output;
    }
}
new Solution().find_fact(5);
// https://practice.geeksforgeeks.org/problems/power-of-pow-even-number5440/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    sum_of_square_evenNumbers(n) {
        let output = 2 * (n * (n + 1) * ((2 * n) + 1)) / 3;
        //   console.log(output);
        return output;
    }
}
new Solution().sum_of_square_evenNumbers(5);
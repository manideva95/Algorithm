//  https://practice.geeksforgeeks.org/problems/distance-between-2-points3200/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    distance(x1, y1, x2, y2) {
        let output;
        output = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        console.log(Math.round(output));
        return Math.round(output);
    }
}
new Solution().distance(0, 0, 2, -2);
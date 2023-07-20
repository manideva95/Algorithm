// https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions

class Solution {
    getMinMax(arr, n) {
        let min, max, output = "";
        min = Math.min(...arr);
        max = Math.max(...arr);
        output = min + " " + max;
        console.log(output);
        return output;
    }
}
new Solution().getMinMax([5, 6, 3, 8, 9, 100], 6);
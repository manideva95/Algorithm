//  https://practice.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions

class Solution {
    search(arr, N, X) {
        let output, result;
        output = arr.find(element => element == X);
        // console.log(output);
        if (output == X) {
            result = arr.indexOf(X);
        } else {
            result = -1;
        }
        console.log(result);
        return result;
    }
}
new Solution().search([1, 2, 3, 3, 4], 5, 3);
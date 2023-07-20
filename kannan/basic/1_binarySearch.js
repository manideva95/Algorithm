// https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&difficulty[]=-1&category[]=Arrays&category[]=pattern-printing&sortBy=submissions

class Solution {
    binarysearch(arr, n, k) {
        let output = -1;
        for (let i = 0; i < n; i++) {
            if (k == arr[i]) {
                output = i;
                break;
            }
        }
        // console.log(output);
        return output;
    }
}
new Solution().binarysearch([1, 2, 3, 4, 5], 5, 4);
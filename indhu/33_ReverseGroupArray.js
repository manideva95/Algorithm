// https://practice.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    print(arr, k) {
        let result = [];
        let K = k;
        let reverse = [];
        arr.forEach((item, index) => {
            reverse.push(item);
            if ((index + 1) == K && !(K % k)) {
                reverse.reverse();
                result.push(...reverse);
                K = +k;
                reverse = [];
            } else if (index + 1 == arr.length) {
                reverse.reverse();
                result.push(...reverse);
            }
        });
        console.log(result);
        return result;
    }
}

new Solution().print([1, 2, 3, 4, 5], 3)
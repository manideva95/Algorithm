class Solution {
    isPerfect(arr, n) {
        for (let i = 0; i < n; i++) {
            if (arr[i] != arr[(n - 1)]) {
                console.log("not perfect");
                return false;

            } n--;
        }
        console.log("perfect");
        return true;
    }
}

new Solution().isPerfect([1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1], 14); 
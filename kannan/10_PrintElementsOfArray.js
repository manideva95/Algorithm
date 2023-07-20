class Solution {
    printArray(arr, n) {
        let output = "";
        for (let i = 0; i < n; i++) {
            output = output + arr[i] + " ";

        } console.log(output);

    }
}
new Solution().printArray([1, 2, 3, 4, 5], 5)
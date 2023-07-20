class Solution {
    findSingle(n, arr) {
        let arr1 = [];
        let output;
        arr1 = arr.sort();
        console.log(arr1[0]);
        for (let i = 0; i < n; i = i + 2) {
            if (arr1[i] != arr1[i + 1]) {
                console.log(arr1[i]);
                output = arr1[i];
                break;
            }
        }
        console.log(output);
        return output;
    }
}
new Solution().findSingle(9, [21, 24, 23, 21, 22, 22, 25, 23, 24]);
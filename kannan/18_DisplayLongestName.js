class Solution {
    longestName(arr, n) {
        let a = "";
        for (let i = 0; i < n; i++) {
            if (arr[i].length > a.length) {
                a = arr[i];
            }
        } console.log(a);
    }
}
new Solution().longestName(["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGks", "GeeksforGeeks"], 6);


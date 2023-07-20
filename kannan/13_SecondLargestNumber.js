class Solution {
    print2largest(arr, n) {
        let a = Math.max(...arr);
        let d = arr.filter((arr) => (arr < a));
        let b = Math.max(...d);
        if (b == -Infinity) {
            b = -1;
        }
        console.log(b);
        return b;
    }
}
new Solution().print2largest([35, 35, 35, 35, 35, 35], 6);
class Solution {
    findElements(arr, n) {
        let a = Math.max(...arr);
        let c = arr.indexOf(a);
        arr.splice(c, 1);
        let b = Math.max(...arr);
        let d = arr.indexOf(b);
        arr.splice(d, 1);
        let e = arr.sort((a, b) => a - b);
        return e;
    }
}
new Solution().findElements([1, 9, 7, 10, 14, 5, 4, 15], 8)
class Solution {
    revStr(s) {
        let backward = s.toString().split("").reverse().join("");
        console.log(backward);
        return backward;

    }
}
new Solution().revStr("GeeksforGeeks");
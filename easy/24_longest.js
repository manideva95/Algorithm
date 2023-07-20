//https://practice.geeksforgeeks.org/problems/display-longest-name0853/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions
class Solution {
    longest(names, n) {
        //code here
        let prev = 0;
        let longestNameIndex;
        for (let i = 0; i < names.length; i++) {
            const el = names[i];
            if (el.length > prev) {
                longestNameIndex = i
            }
            prev = el.length
        }
        return (names[longestNameIndex])
    }
}

new Solution().longest(["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"])
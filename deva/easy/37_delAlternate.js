//https://practice.geeksforgeeks.org/problems/java-delete-alternate-characters4036/1?page=1&difficulty[]=-2&category[]=Strings&sortBy=submissions
class Solution {
    delAlternate(S) {
        let arr = [...S];
        for (let i = 0; i < S.length; i++) {
            if (i % 2 != 0) {
                delete arr[i]
            }
        }
        return (arr.join(""))
    }
}
new Solution().delAlternate("GeeksforGeeks");
//https://practice.geeksforgeeks.org/problems/remove-characters-from-alphanumeric-string0648/1?page=1&difficulty[]=-2&category[]=Strings&sortBy=submissions
class Solution {
    removeCharacters(s) {
        //code here
        // s.length - s.replace(/[1-9]/g, '').length
        return (s.replace(/[a-z,A-Z]/g, ''));
    }
}

new Solution().removeCharacters("sdhfiusdhfh")
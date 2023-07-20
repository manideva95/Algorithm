//  https://practice.geeksforgeeks.org/problems/vowel-or-not0831/1?page=4&difficulty[]=-2&sortBy=submissions

class Solution {
    isVowel(c) {
        let output = c.toLowerCase();
        console.log(output);
        if (output == 'a' || output == 'e' || output == 'i' || output == 'o' || output == 'u') {
            output = "YES";
        }
        else {
            output = "NO";
        }
        console.log(output);
        return output;
    }
}
new Solution().isVowel("E");
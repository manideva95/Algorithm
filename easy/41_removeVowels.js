//https://practice.geeksforgeeks.org/problems/remove-vowels-from-string1446/1?page=1&difficulty[]=-2&category[]=Strings&sortBy=submissions
class Solution {
    removeVowels(s) {
        // return s.replace(/[aeiou]/gi, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        return s.replace(/[aeiou]/gi, '')
    }
}
console.log(new Solution().removeVowels("<$uo?.*>"));


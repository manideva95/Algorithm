// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

function isPalindrome(s) {
    let l = 0;
    let k = s.length - 1
    while (l < k) {
        if (s[k] === s[l]) {
            l++;
            k--;
        } else {
            return false;
        }
    }
    return true
}
class Solution {

    // topic: string, array, two pointer
    fn(s) {
        for (let i = 0; i < s.length; i++) {
            // if (s[i] == s[i].split('').reverse().join('')) {
            //     return s[i]
            // }

            // two point
            console.log(isPalindrome(s[i]));
            if (isPalindrome(s[i])) {
                return s[i]
            }
        }
        return ''
    }

}

const data = new Solution().fn(["po", "zsz"]);
console.log(data);

//         for (let word of words) {
//     let i = 0;
//     let j = word.length - 1;
//     while (i < j) {
//         if (word[i] == word[j]) {
//             if (i == j - 2 || i == j - 1) {
//                 return word
//             }
//             i++;
//             j--;
//         } else {
//             break;
//         }
//     }
// }
// return ""
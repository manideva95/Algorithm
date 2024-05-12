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

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
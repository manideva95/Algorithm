// https://leetcode.com/problems/lexicographically-smallest-palindrome/description/

class Solution {

    // topic: two pointer, string, greedy
    fn(s) {
        // let i = 0;
        // let j = s.length - 1;
        // while (i < j) {
        //     if (s[i] !== s[j]) {
        //         if (s[i] < s[j]) {
        //             s = s.substring(0, j) + s[i] + s.substring(j + 1, s.length)
        //         } else {
        //             s = s.substring(0, i) + s[j] + s.substring(i + 1, s.length)
        //         }
        //     }
        //     i++;
        //     j--
        // }
        // return s

        // Alternate

        const split = s.split('')

        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            if (split[i] !== split[j]) {
                if (split[i] < split[j]) {
                    split[j] = split[i]
                } else {
                    split[i] = split[j]
                }
            }
            i++;
            j--
        }
        return split.join('')
    }

}

const data = new Solution().fn('abdc');
console.log(data);


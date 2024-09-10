// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

class Solution {

    // topic: string, array, string matching
    fn(words, pref) {
        let count = 0;
        words.forEach(element => {
            if (element.substring(0, pref.length) == pref) {
                count++
            }
        });
        return count
    }

}

const data = new Solution().fn(["leetcode", "win", "lo", "success"], 'code');
console.log(data);



// Alternate
// let count = 0;
// for (let word of words) {
//     if (word.startsWith(pref)) {
//         count++
//     }
// }
// return count
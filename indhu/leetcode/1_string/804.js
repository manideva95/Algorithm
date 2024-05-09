// https://leetcode.com/problems/unique-morse-code-words/description/

class Solution {

    // topic: string, array, hash table
    fn(words) {
        if (words.length <= 1) {
            return words.length
        }
        const encoder = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
        let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const result = new Set();

        for (let i = 0; i < words.length; i++) {
            let encoded = ''
            for (let c of words[i]) {
                const index = alphabets.indexOf(c);
                encoded = encoded + encoder[index]
            }

            result.add(encoded)
        }
        return result.size
    }

}

const data = new Solution().fn(["gin", "zen", "gig", "msg", 'res']);
console.log(data);

// Observation:




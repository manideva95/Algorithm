// https://leetcode.com/problems/encode-and-decode-tinyurl/

const obj = new Map();

class Solution {

    // topic: hash table, string, Design, hash funcation

    encode(longUrl) {
        const code = Math.random().toString(36).slice(2)
        obj.set(code, longUrl);
        let shortUrl = '';
        for (let i = 0; i < longUrl.length; i++) {
            if (longUrl[i] !== '/') {
                shortUrl = shortUrl + longUrl[i]
            } else {
                shortUrl = shortUrl + '//' + longUrl.substring(longUrl.lastIndexOf('/') + 1, longUrl.length - 1) + '/' + code;
                break
            }
        }
        // return shortUrl
        return this.decode(shortUrl)
    }

    decode(shortUrl) {
        const code = shortUrl.substring(shortUrl.lastIndexOf('/') + 1, shortUrl.length)
        return obj.get(code)
    }


    // encode(s) {
    //     let word = ''
    //     let decode = ''
    //     let count = 0;
    //     for (let i = 0; i < s.length; i++) {
    //         if (s[i] !== '/') {
    //             word = word + s[i]
    //             if (i == s.length - 1) {
    //                 obj.set(word, word)
    //             }
    //         } else {
    //             if (count < 3) {
    //                 decode = decode + `${word}/`;
    //                 count++
    //             }
    //             if (i == s.length - 1) {
    //                 obj.set(`${word}/`, `${word}/`)
    //                 decode = decode + word;
    //             } else {
    //                 obj.set(word, word)
    //             }
    //             word = ''
    //         }
    //     }
    //     this.decode(decode)
    // }

    // decode() {
    //     return [...obj.keys()].join('/')
    // }

}

const data = new Solution().encode('https://leetcode.com/problems/design-tinyurl');
console.log(data);
// Observation:
// vocabulary: deci-binary
// input: +integer
// output Time Complexity : O(3n)


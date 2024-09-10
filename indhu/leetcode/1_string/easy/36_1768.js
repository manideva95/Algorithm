// https://leetcode.com/problems/merge-strings-alternately/description/

class Solution {

    // topic: string
    fn(word1, word2) {
        let result = '';
        for (let i = 0; i < word1.length; i++) {
            result = result + word1[i] + word2[i];
            if (word1.length - 1 == i) {
                result = result + word2.substring(i + 1, word2.length);
                break
            }
            if (word2.length - 1 == i) {
                result = result + word1.substring(i + 1, word1.length);
                break
            }
        }
        return result;
    }

}

const data = new Solution().fn('abc', 'pqrdddd');
console.log(data);

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
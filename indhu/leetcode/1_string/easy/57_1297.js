// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/

class Solution {

    // topic: hash table, string, sliding window
    fn(s, maxLetters, minSize, maxSize) {
        let maxFrequency = 0;
        let substringCounts = new Map();
        for (let i = 0; i <= s.length - minSize; ++i) {
            let t = s.substring(i, i + minSize);
            let uniqueChars = new Set(t.split(''));
            if (uniqueChars.size <= maxLetters) {
                let count = substringCounts.get(t) || 0;
                substringCounts.set(t, count + 1);
                maxFrequency = Math.max(maxFrequency, count + 1);
            }
        }
        return maxFrequency;
    }

}

const findDuplicate = (array) => {
    return array.filter((item, index) => array.indexOf(item) !== index)
}

const data = new Solution().fn("aababcaab", 2, 3, 4);
console.log(data);

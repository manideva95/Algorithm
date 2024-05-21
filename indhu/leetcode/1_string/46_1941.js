// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

class Solution {

    // topic: string, hashing, counting
    fn(s) {
        let obj = new Map();
        for (let c of s) {
            let count = obj.get(c);
            obj.set(c, count ? ++count : 1);
        }
        return new Set([...obj.values()]).size === 1

    }

}

const data = new Solution().fn("abacbc");
console.log(data);

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
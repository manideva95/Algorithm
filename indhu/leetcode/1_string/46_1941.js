// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

class Solution {

    // topic: string, hashing, counting
    fn(s) {
        // let obj = new Map();
        // for (let c of s) {
        //     let count = obj.get(c);
        //     obj.set(c, count ? ++count : 1);
        // }
        // console.log(obj.values());
        // for (let item of obj.values()) {
        //     if (item % 2) {
        //         return false
        //     }
        // }
        // return true
        let map = new Map()
        for (let letter of s) {
            if (map.has(letter)) {
                map.set(letter, map.get(letter) + 1)
            } else {
                map.set(letter, 1)
            }
        }
        console.log(new Set([...map.values()]));
        return new Set([...map.values()]).size === 1
    }

}

const data = new Solution().fn("vvvvvvvvvvvvvvvvvvv");
console.log(data);

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

class Solution {

    // topic: string, stack
    fn(s) {
        let ans = 0;
        let opened = 0;

        for (let c of s) {
            if (c === '(') {
                opened++;
                ans = Math.max(ans, opened);
            } else if (c === ')') {
                opened--;
            }
        }

        return ans;
    }

}

const data = new Solution().fn("(1+(2*3)+((8)/4))+1");
console.log(data);

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
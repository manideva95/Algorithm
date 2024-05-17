// https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/

class Solution {

    // topic: string
    fn(n, startPos, s) {
        n = n - 1
        let result = [];
        for (let i = 0; i < s.length; i++) {
            let j = i;
            let count = 0;
            let pos = [startPos[0], startPos[1]];
            while (j < s.length) {
                console.log(pos, s[i]);
                if (s[j] == "R" && pos[1] < n) {
                    count++;
                    pos[1] = pos[1] + 1;
                } else if (s[j] == "D" && pos[0] < n) {
                    pos[0] = pos[0] + 1;
                    count++;
                } else if (s[j] == "U" && pos[0] > 0) {
                    pos[0] = pos[0] - 1;
                    count++;
                } else if (s[j] == "L" && pos[1] > 0) {
                    pos[1] = pos[1] - 1;
                    count++;
                } else {
                    break;
                }
                j++;
            }
            result.push(count)
        }
        return result
    }

}

const data = new Solution().fn(2, [0, 0], "LURD");
console.log(data);

// Observation:
// input: 1 <= n


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
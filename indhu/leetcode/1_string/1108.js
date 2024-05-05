// https://leetcode.com/problems/defanging-an-ip-address/description/

class Solution {

    // topic: string
    fn(s) {
        return s.replaceAll('.', '[.]')
    }

}

const data = new Solution().fn('131.12.12.23');
console.log(data);

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)


class Solution {
    oddEven(N) {
        let result;
        if (N % 2 === 0) {
            result = 'even'
        } else {
            result = 'odd'
        }
        console.log(result);
        return result;
    }
}

new Solution().oddEven(-2);
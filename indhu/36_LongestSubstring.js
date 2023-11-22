class Solution {
    print(s) {
        let longestSubtring = s.charCodeAt(0);
        let indexOfLongestSubtring = 0;
        for (let i = 1; i <= s.length; i++) {
            if (s.charCodeAt(i) > longestSubtring) {
                longestSubtring = s.charCodeAt(i);
                indexOfLongestSubtring = i
            }
        }
       const filtered = s.substring(indexOfLongestSubtring).split('');
       const strArr = Array.from(new Set(filtered)).join('');
       console.log(strArr)
       return strArr;
    }
}

new Solution().print('abacaabc');
// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

class Solution {

    // topic: string, counting
    fn(s) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const toLowerCase = s.toLowerCase();
        let count = 0;
        let i = 0;
        let j = toLowerCase.length - 1;

        while (i < j) {
            if (vowels.includes(toLowerCase[i])) {
                count++
            }
            if (vowels.includes(toLowerCase[j])) {
                count--
            }
            i++;
            j--;
        }
        return count ? false : true
    }

}

const data = new Solution().fn('Uo');
console.log(data);


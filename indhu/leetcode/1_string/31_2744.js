// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

class Solution {

    // topic: string
    fn(words) {
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            let j = words.length - 1;
            while (i < j) {
                if (words[i][0] == words[j][1] && words[i][1] == words[j][0]) {
                    count++;
                    break
                } else {
                    j--;
                }
            }
        }
        return count;
    }

}

const data = new Solution().fn(["sa", "ue", "ss", "df", "au", "ru", "id", "ur"]);
console.log(data);


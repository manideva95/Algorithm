class Solution {

    twoSum(haystack, needle) {
        let j = 0;
        let a = haystack.split('');
        let b = needle.split('');
        for (let i = 0; i < a.length;) {
            if (a[i] === b[j]) {
                if (j === (b.length - 1)) {
                    return i - (b.length - 1)
                }
                j++;
                i++;
            } else {
                i = i + 1 - j;
                j = 0;
            }
        }
        return -1;
    }

}


const data = new Solution().twoSum("mississippi", "sissip");
console.log(data);
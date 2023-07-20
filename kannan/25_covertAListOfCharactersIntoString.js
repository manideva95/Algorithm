class Solution {
    chartostr(arr, n) {
        let words = arr.toString().split("").join("");
        let final = words.replace(/,/g, '');
        console.log(words);
        console.log(final);
        return final;
    }
}
new Solution().chartostr(['g', 'e', 'e', 'k', 's', 'f', 'o', 'r', 'g', 'e', 'e', 'k', 's'], 13);


class Solution {
    conRevstr(S1, S2) {
        let word1 = S1.toString().split("").reverse().join("");
        let word2 = S2.toString().split("").reverse().join("");
        let final = word2 + word1;
        console.log(final);
        return final;
    }
}
new Solution().conRevstr("Geeks", "forGeeks"); // output skeeGrofskeeG 
// new Solution().conRevstr("Practice" ,"Geeks"); output skeeGecitcarP


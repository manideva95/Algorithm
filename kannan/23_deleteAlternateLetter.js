class Solution {
    delAlternate(S) {
        let letter = Array.from(S);
        console.log(letter);
        for (let i = 0; i < S.length; i++) {
            if (i % 2 != 0) {
                delete letter[i];
            }
        }
        console.log(letter);
        let final = letter.toString();
        console.log(final);
        let output = final.replace(/[,]/g, '');
        console.log(output);
    }
}
new Solution().delAlternate("GeeksforGeeks");
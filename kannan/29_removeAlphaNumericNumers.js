class Solution {
    removeCharacters(s) {
        let final = s.replace(/[a-z]/g, '');
        let output = final.replace(/[A-Z]/g, '');
        console.log(final);
        console.log(final.length);
        console.log(output);
        console.log(output.length);
        return output;
    }
}
new Solution().removeCharacters("1ab2DC3"); // output only numbers 123
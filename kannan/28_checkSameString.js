class Solution {
    check(s) {
        let array = Array.from(s);
        let result;
        for (let i = 0; i < s.length; i++) {
            if (array[i] === array[0]) {
                console.log("yes");
                result = true;
            }
            else {
                console.log("no");
                result = false;
                break;
            }
        }
        return result ? true : false;
    }
}
new Solution().check("gggg"); // output = true
// new Solution().check("geeks"); // output = false
class Solution {
    check(s) {
        //code here
        let prev = s.charAt(0)
        let result = true
        for (let i = 1; i < s.length; i++) {
            if (prev === s[i]) {
                result = true
            } else {
                result = false
                break;
            }
            prev = s[i]
        }
        return result
    }
}
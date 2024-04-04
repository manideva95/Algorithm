class Solution {
    isBinary(str) {
        //code here
        let arr = str.toString().split("")
        let result;
        for (let i = 0; i < arr.length; i++) {
            const el = parseInt(arr[i]);
            if ((el === 0) || (el === 1)) {
                result = true
            } else {
                result = false
                break;
            }
        }
        if (result) {
            return true
        } else {
            return false
        }
    }
}
let result = new Solution()
result.isBinary('0111100110101100')

class Solution {
    isBinary(str) {
        let result;
        let separate = str.toString().split('');
        for (let i = 0; i < separate.length; i++) {
            const el = parseInt(separate[i]);
            if (el == 1 || el == 0) {
                result = true;
            }
            else {
                result = false;
                break;
            }
        }
        console.log(result);
        if (result) {
            console.log(result);
            return true
        } else {
            console.log(result);
            return false
        }

    }
}
new Solution().isBinary(0111100110101100);
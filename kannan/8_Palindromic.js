class Solution {

    PalinArray(arr, n) {
        //code here
        let result = true
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            console.log(el)
            console.log(el.toString().split("").reverse().join(""));
            if (el == el.toString().split("").reverse().join("")) {
                result = true
            } else {
                result = false
                break;
            }
        }
        return result ? 1 : 0
    }
}
new Solution().PalinArray([111, 222, 333, 444, 555], 5);
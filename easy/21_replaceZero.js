class Solution {

    convertFive(n) {
        //code here
        let array = n.toString().split("")
        for (let i = 0; i < array.length; i++) {
            const el = array[i];
            if (el == 0) {
                array[i] = 5
            }
        }
        console.log(array.join(""))
    }
}

(new Solution).convertFive(5007)


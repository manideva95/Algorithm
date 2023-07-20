class Solution {
    transform(s) {
        let array = [];
        array = s.split(" ");
        console.log(array);
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
        console.log(array);
        array = array.join(" ");
        console.log(array);
        return array;
    }
}
new Solution().transform("i love programming");
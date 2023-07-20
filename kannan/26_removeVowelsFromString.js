class Solution {
    removeVowels(s) {

        //  METHOD 1

        // let final = s.replace(/[aeiou]/g, '');
        // // console.log(final);
        // // console.log(final.length);
        // // return final;

        // METHOD 2

        // let array = [];
        // let vowels = ['a', 'e', 'i', 'o', 'u'];
        // let result = "";
        // array = Array.from(s);
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
        //         let el = array[i];
        //         array[i] = el.replace(el, '');
        //     }
        // }
        // let a = array.join("");
        // let output = a.toString();
        // console.log(output);
        // return output;

        // METHOD 3

        // let array = [];
        // let vowels = ['a', 'e', 'i', 'o', 'u'];
        // let result = "";
        // array = Array.from(s);
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
        //         let el = array[i];
        //         array[i] = el.replace(el, '');
        //     }
        // }
        // let a = array.join("");
        // let output = a.toString();
        // console.log(output);
        // return output;

        // // METHOD 4 ALSO MOST CORRECT ANSWER 

        let array = [];
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let result = "";
        array = Array.from(s);
        for (let i = 0; i < array.length; i++) {
            if (!vowels.includes(array[i])) {
                result = result + array[i];
            }

        }
        console.log(result);
        return result;

        //  METHOD 5 MOST CORRECT ANSWER

        // let al = ['a', 'e', 'i', 'o', 'u',
        //     'A', 'E', 'I', 'O', 'U'];
        // let result = "";
        // console.log(s);

        // for (let i = 0; i < s.length; i++) {

        //     if (!al.includes(s[i])) {
        //         console.log(s[i]);
        //         result += s[i];
        //         console.log(result);
        //     }
        //     console.log(result);
        // }
        // console.log(result);
        // return result;
    }
}
// new Solution().removeVowels("welcome to geeksforgeeks");
new Solution().removeVowels("<$uo?.*>"); 
// https://practice.geeksforgeeks.org/problems/at-least-two-greater-elements4625/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

// class Solution {
//     findElements(arr, n) {
//         //code here
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[i] < arr[j]) {
//                     let temp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = temp
//                 }
//                 // if ((i == (arr.length - 1)) && (j == (arr.length - 1))) {
//                 //     console.log(arr)
//                 // }
//             }
//         }
//         // console.log(arr)
//         let result;
//         arr.forEach((el, ind) => {
//             if (arr.length >= 2 && (ind <= arr.length - 3)) {
//                 result = result ? result + " " + el : el
//             }
//         })
//         console.log(result)
//         return result

//     }
// }

class Solution {
    findElements(arr, n) {
        let a = Math.max(...arr);
        let c = arr.indexOf(a);
        arr.splice(c, 1);
        let b = Math.max(...arr);
        let d = arr.indexOf(b);
        arr.splice(d, 1);
        let e = arr.sort((a, b) => a - b);
        return e;
    }
}
new Solution().findElements([10, 11, 4], 5)

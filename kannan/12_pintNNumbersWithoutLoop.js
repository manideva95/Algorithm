

class Solution {
    printNos(main) {
        // let print = " ";
        // function number(n) {
        //     //     if (n <= 0) {
        //     //         console.log(print);
        //     //     } else {
        //     //         print = print + n + " ";
        //     //         console.log(print);
        //     //         n = n - 1;
        //     //     }
        //     // }
        //     // number(n);
        //     if (n <= 0) {
        //         return 1;
        //     } else {
        //         print = print + n + " ";
        //         console.log(print);
        //         // n = n - 1;
        //         return number(n - 1);
        // }
        //     }

        let output = [];

        function main(n) {
            if (n > 0) {
                return print(n);
            }
        }
        function print(n) {
            output.push(n);
            n = n - 1;
            console.log(n);
        }
        console.log(output);
    }




}


new Solution().printNos(10);

// function scores(arr1, arr2) {
//     let a = 0;
//     let b = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > arr2[i]) {
//             a = a + 1;
//         } if (arr1[i] < arr2[i]) {
//             b = b + 1;
//         }

//     } console.log(a + " " + b);
// }
// scores([4, 2, 7], [5, 2, 8]);
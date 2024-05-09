// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

class Solution {

    // topic: string
    fn(s) {
        let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const start = alphabets.indexOf(s[0]);
        const end = alphabets.indexOf(s[3]);
        const result = [];
        for (let i = start; i <= end; i++) {
            for (let j = parseInt(s[1]); j <= parseInt(s[4]); j++) {
                result.push(`${alphabets[i]}${j}`)
            }
        }
        return result
    }

}

const data = new Solution().fn('F3:L4');
console.log(data);


// Alternate
//     let e=[]
// for(let i=s[0].charCodeAt();i<=s[3].charCodeAt();i++){
//     for(let j=s[1];j<=s[4];j++){
//         e.push(String.fromCharCode(i)+j)
//     }
// }
// return e
// https://leetcode.com/problems/find-words-containing-character/

class Solution {

    // topic: string
    fn(words, s) {

        const result = [];
        let j = words.length - 1;
        let i = 0;
        while (i <= j) {
            if (i == j) {
                if (words[i].includes(s)) {
                    result.push(i)
                }
                break
            }
            if (words[i].includes(s)) {
                result.push(i)
            }
            if (words[j].includes(s)) {
                result.push(j)
            }
            i++;
            j--;
        }
        return result
    }

}

const data = new Solution().fn(['sdf', 'dsf', 'erer', 'e', 'de'], 'e');
console.log(data);


// Alternate
//     let e=[]
// for(let i=s[0].charCodeAt();i<=s[3].charCodeAt();i++){ 
//     for(let j=s[1];j<=s[4];j++){
//         e.push(String.fromCharCode(i)+j)
//     }
// }
// return e
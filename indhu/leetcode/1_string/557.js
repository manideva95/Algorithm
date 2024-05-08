// https://leetcode.com/problems/reverse-words-in-a-string-iii/

class Solution {

    // topic: string, two pointer
    fn(s) {
        const split = s.split(' ');
        let result = '';

        for (let element of split) {
            let i = 0;
            let splitElement = element.split('')
            let j = splitElement.length - 1;
            while (i < j) {
                [splitElement[i], splitElement[j]] = [splitElement[j], splitElement[i]];
                i++;
                j--;
            }
            result = result ? result + ' ' + splitElement.join('') : splitElement.join('')
        }
        return result
    }

}

const data = new Solution().fn("Mr Ding");
console.log(data);

// Observation:
// input: separated by a single space.
// output: reverse word in s
// Methods: join() split [time complexity : O(n )]
// output Time Complexity : 


// Alternate
//  let wordsArr = s.split(" ")
// let reversedWordsArr = []
// for (let i = 0; i < wordsArr.length; i++) {
//     reversedWordsArr.push(wordsArr[i].split("").reverse().join(""))
// }
// return reversedWordsArr.join(" ")
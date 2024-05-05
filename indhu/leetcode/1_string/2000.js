// https://leetcode.com/problems/reverse-prefix-of-word/description/

class Solution {

    // topic: two pointer, string
    fn(word, ch) {

        // const firstHalf = word.substring(0, word.search(ch) + 1);
        // const secondHalf = word.substring(word.search(ch) + 1);
        // return firstHalf.split('').reverse().join('').concat(secondHalf)

        // let arr = [];
        // for (let i = 0; i < word.length; i++) {
        //     arr.unshift(word[i])
        //     if (word[i] === ch) {
        //         return arr.join('').concat(word.substring(i + 1))
        //     }
        // }
        // return word

        let left = 0;
        let right = word.indexOf(ch);
        let arr = word.split('');
        while (left < right) {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        return arr.join('')
    }

}

const data = new Solution().fn('abcd', 'c');
console.log(data);

// Observation:
// vocabulary: inclusive
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
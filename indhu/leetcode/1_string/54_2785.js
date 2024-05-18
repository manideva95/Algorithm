// https://leetcode.com/problems/sort-vowels-in-a-string/

class Solution {

    // topic: string, sorting
    fn(s) {
        let sortArr = [];
        let index = [];
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let split = s.split('')
        split.forEach((c, i) => {
            if (vowels.includes(c)) {
                sortArr.push(c)
                index.push(i)
            }
        })
        sortArr.sort()
        for (let i = 0; i < sortArr.length; i++) {
            split.splice(index[i], 1, sortArr[i])
        }
        return split.join('')
    }

}


const data = new Solution().fn('aA');
console.log(data);

// Observation:
// vocabulary: permute
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
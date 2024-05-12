// https://leetcode.com/problems/decode-the-message/

class Solution {

    // topic: string
    fn(key, message) {
        const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
        const keyArr = key.split('').filter((item, i, arr) => {
            return arr.indexOf(item) === i && item.trim()
        }
        )
        const messageArr = message.split('');
        let result;
        messageArr.forEach(element => {
            if (element.trim()) {
                const index = keyArr.indexOf(element)
                result = result ? result + alphabet[index] : alphabet[index]
            } else {
                result = result ? result + " " : " "
            }
        });
        return result
    }

}

const data = new Solution().fn('eljuxhpwnyrdgtqkviszcfmabo', "zwx hnfx lqantp mnoeius ycgk vcnjrdb");
console.log(data);

// Observation:
// vocabulary: cipher
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)
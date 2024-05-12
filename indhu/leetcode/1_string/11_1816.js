// https://leetcode.com/problems/truncate-sentence/description/

class Solution {

    // topic: string, array
    fn(s, k) {
        return s.split(' ').slice(0, k).join(' ')
    }

}

const data = new Solution().fn('What is the solution to this problem', 4);
console.log(data);

// Observation:
// input: lower or upper case, no leading / trailing space
// output: truncate
// Methods: slice(), split(), join() [time complexity : O(n)]
// output Time Complexity : O(3n)


// Alternate
//  const words=s.split(' ');
// let res='';
// for(let i=0;i<k;i++){
//     res=res+" "+words[i];
// }
// return res.substring(1,res.length);
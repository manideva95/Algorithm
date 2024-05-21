// https://practice.geeksforgeeks.org/problems/display-longest-name0853/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {

    longest(names,n){
        let length=0;
        let name;
        for(let i=0; i<n;i++){
            if(names[i].length > length){
                length=names[i].length;
                name=names[i];
            }
        }
        console.log(name);
        return name;
    }
}

new Solution().longest([ "Geekdereeeeeeeeeeeeeee", "Geeks", "Geeksfor",
"GeeksforGeek", "GeeksforGeeks" ],5)
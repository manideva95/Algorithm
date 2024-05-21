
class Solution{
    toLower(arr,n){
        let array=[]
        for(let i=0;i<arr.length;i++){
           array[i]=arr[i].toLowerCase() 
        }
        console.log(array);
        return array
    }
}

new Solution().toLower(['a','b','C','D','H'])
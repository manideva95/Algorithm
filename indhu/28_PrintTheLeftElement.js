// https://practice.geeksforgeeks.org/problems/print-the-left-element2009/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {
    leftElement(arr) {
        let array=arr;
        for(let i=0;i<array.length; i++){
            if(array.length !== 2){
                array =this.left(array);
            }
        }
        if(array.length ===2){
                    if (array[0] < array[1]) {
                        array.splice(1,1);
                    } else{
                        array.splice(0,1)
                    }
                }
                console.log(array);
        return array[0]
    }
    left(array){
        let large = array[0];
        let small = array[0];
        let index=0;
        let index2=0;
        for (let i = 0; i < array.length ; i++) {
            if (large < array[i]) {
                    large = array[i];
                    index=i
                } 
                if (small > array[i]) {
                    small = array[i];
                    index2=i
                }}
                const data=array.filter((item,ind)=>(ind !== index && ind !==index2))
            return data
        }
}

new Solution().leftElement([9, 11, 1, 4, 8, 6, 1])
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

class Solution {
    public String reverseWords(String s) {
        StringBuilder result = new StringBuilder();
    String[] strArr = s.split(" ");
    for(int i=0; i<strArr.length;i++){
    StringBuilder sb = new StringBuilder();
    result.append(sb.append(strArr[i]).reverse());
    if(i!= strArr.length-1){
        result.append(" ");
    }
}
    return result.toString();
    }
}
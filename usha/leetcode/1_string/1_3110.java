class Solution {
    public int scoreOfString(String s) {
        int result= 0;
        for (int i=1; i<s.length();i++){
        result +=Math.abs(s.charAt(i-1)-s.charAt(i));
    }
    return result;
    }
}

//to convert string to char, use s.charAt(index)
//Math.abs results the absolute value(the non-negative value of x without regard to its sign)
// of a argument (x)
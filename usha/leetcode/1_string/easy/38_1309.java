// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/


class Solution {
    public static String freqAlphabets(String s) {
        HashMap<String, Character> map = new HashMap<>();
            int k = 1;
            for (char ch = 'a'; ch <= 'z'; ch++) {
                if (ch < 'j')
                    map.put(String.valueOf(k++), ch);
                else
                    map.put(String.valueOf(k++)+"#", ch);
            }

            StringBuilder sb = new StringBuilder();
            int i = s.length() - 1;
            while (i >= 0) {
                if (s.charAt(i) == '#') {
                    sb.append(map.get(s.substring(i - 2, i+1)));
                    i -= 3;
                } else {
                    sb.append(map.get(s.substring(i, i + 1)));
                    i--;
                }
            }

            return sb.reverse().toString();
    }
}

    public static void main(String[] args){
        System.out.println(" String to Integer str::" +  Solution.freqAlphabets("10#11#12"));
    }

//Time Complexity : O(n)    
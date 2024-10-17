// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences

public class solution {
    public static boolean areOccurrencesEqual(String s) {
        HashMap<Character,Integer> map = new HashMap<>();
        for( int i=0; i<s.length();i++) {
            if(!map.containsKey(s.charAt(i))){
                map.put(s.charAt(i),1);
            }else{
                map.put(s.charAt(i),map.get(s.charAt(i))+1);
            }
        }
        int count=map.get(s.charAt(0));
        for(Character i:map.keySet()){
            if(map.get(i)!=count){
                return false;
            }
        }
        return true;
    }
    public static void main (String[] args){
         System.out.println("string=="+ solution.areOccurrencesEqual("aaabb"));
    }
}

//time complexity: O(n)
//other approach :
// public boolean areOccurrencesEqual(String s) {
//         int[] frequency = new int[27];
//         int lastSeenFrequency = 0;
//         for (char ch: s.toCharArray()) {
//             frequency[ch - 'a']++;
//             lastSeenFrequency = frequency[ch - 'a'];
//         }

//         for (int i: frequency) {
//             if (i != 0 && i != lastSeenFrequency) {
//                 return false;
//             }
//         }
//         return true;
//     }
// https://leetcode.com/problems/decode-the-message/

class Solution {
    public String decodeMessage(String key, String message) {
        StringBuilder decodedMsg = new StringBuilder();
        char ch='a';
        HashMap<Character,Character> hmap = new HashMap<>();
        for(int i=0;i<key.length();i++){
            if(!hmap.containsKey(key.charAt(i)) &&  key.charAt(i) !=' '){
                hmap.put(key.charAt(i),ch);
                ch++;
            }
        }
        for(int i=0;i<message.length();i++){
            if(message.charAt(i)!=' '){
                decodedMsg.append(hmap.get(message.charAt(i)));
            }else {
                decodedMsg.append(" ");
            }
        }
        return decodedMsg.toString();
    }
}
// https://leetcode.com/problems/sort-the-people/description/

class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        int index = names.length-1;
        TreeMap<Integer, String> map = new TreeMap<>();
        for(int i =0; i<names.length;i++){
            map.put(heights[i],names[i]);
        }
        String[] sortedarray = new String[names.length];
        for(int height : map.keySet()){
            sortedarray[index]=map.get(height);
            index--;
        }
        return sortedarray;
    }
}

// Time complexity O(n log n) time for iterating n times name(o(n)) and insertion of map o(log n)
//The algorithm iterates over the length of n to insert each height-name pair in the sorted map. Each insertion in the sorted map requires O(logn) time. Thus, the total complexity of this step is O(n⋅logn).
// To fill the sortedNames array, we iterate over all n entries in the map. Each get() operation takes another O(logn) time, making the time complexity of this step O(n⋅logn).
// Thus, the total time complexity of the algorithm is 2⋅O(n⋅logn) or O(n⋅logn).
var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  for (const value of stones) {
    if (jewels.includes(value)) {
      result++;
    }
  }
  return result;
};
let value = numJewelsInStones("aA", "aAAbbbb");
console.log(value);

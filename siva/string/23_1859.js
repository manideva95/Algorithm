var sortSentence = function (s) {
  console.log(s);
  let arr = s.split(" ");
  let temp = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i].split("").reverse().join(""));
  }
  console.log(temp.sort());
  temp.sort();
  console.log(temp);
  let result = [];

  for (let j = 0; j < temp.length; j++) {
    result.push(temp[j].slice(1).split("").reverse().join(""));
  }
  return result.join(" ");
};

sortSentence("is2 sentence4 This1 a3");

let array = [1, 1, 0, 1, 1, 1];
let count;
for (let i = 0; i < array.length; i++) {
  if (array[i] == 1) {
    count++;
  } else {
    count = 0;
  }
}

console.log(count);

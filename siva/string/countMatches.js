var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    for (let item of items[i]) {
      console.log(item);
      if (ruleKey == "type" && item == ruleValue) {
        count++;
      }
      if (ruleKey == "color" && item == ruleValue) {
        count++;
      }
      if (ruleKey == "name" && item == ruleValue) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "type",
  "phone"
);

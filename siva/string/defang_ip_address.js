var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

let value = defangIPaddr("1.1.1.1");

console.log(value);

// replace all method

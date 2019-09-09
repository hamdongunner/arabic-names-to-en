const trans = require("./translate");

function toEnName(str) {
  let finalName = "";
  let array = str.split(" ");
  for (index in array) {
    enName = trans(array[index]);
    finalName += enName + " ";
  }
  return finalName;
}

module.exports = toEnName;

const tools = require("./utility");

module.exports = trans = name => {
  let enName = "";
  for (index in name) {
    i = parseInt(index);
    if (tools.firstLetter(i)) enName[0] = tools.convertTheFirstLetters(name[i]);
    enName += tools.convertLetter(name[i], i);
    if (!tools.isItLastLetter(i, name)) {
      enName = tools.checkSpecialLetter(enName, name[i], name[i + 1]);
      enName += tools.checkNextLetter(name[i], name[i + 1]);
    }
  }
  enName = tools.checkLastLetter(enName, name[name.length - 1]);
  return tools.capitalize(enName);
};

const tools = require("./utility");
const namesdb = require("./cases/fullnamedb");

module.exports = trans = (name) => {
    if (!name) return "";
    // find name in our db and return it if any
    if (namesdb[name]) return tools.capitalize(namesdb[name]);
    // else
    let enName = "";
    for (index in name) {
        i = parseInt(index);
        if (tools.firstLetter(i)) enName = tools.convertTheFirstLetters(name[i]);
        else enName += tools.convertLetter(name[i], i);
        if (!tools.isItLastLetter(i, name)) {
            if (tools.checkThreeLetters(name[i], name[i + 1], name[i + 2]))
                enName += tools.checkThreeLetters(name[i], name[i + 1], name[i + 2]);
            else enName += tools.checkNextLetter(name[i], name[i + 1]);
            enName += tools.checkMiddleLetters(name[i], name[i - 1], name[i + 1]);
            enName = tools.checkSpecialLetter(enName, name[i], name[i + 1]);
        }
    }
    enName = tools.checkLastLetter(enName, name[name.length - 1]);
    return tools.capitalize(enName);
};
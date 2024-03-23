//index.js

function helloAPI() {
    let id = "";
    id = getID("AB16XIANXNMA");
    return id;
  }
function getID(idstring) {
    let id = "";
    id = idstring.substring(1, 6);
    return id
  }
module.exports = helloAPI

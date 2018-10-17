const striptags = require("striptags");
const { default: axios } = require("axios");

const urlPensador = "https://www.pensador.com/blog.php";

const lib = {
  getFromCollection: collection => {
    return getByParams({
      t: "co",
      username: collection
    });
  },
  getFromAmor: () => {
    return getByParams({
      t: "fa"
    });
  },
  getFromMotivacionais: () => {
    return getByParams({
      t: "fm"
    });
  },
  getFromSoltas: () => {
    return getByParams({
      t: "fs"
    });
  }
};

function getByParams(params) {
  return new Promise((resolve, reject) => {
    axios
      .get(urlPensador, {
        params: params
      })
      .then(res => {
        resolve(transf2Object(res.data));
      })
      .then()
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
}

function transf2Object(text = "") {
  text = striptags(
    text
      .replace('document.write("', "")
      .replace('");', "")
      .replace("&quot;", "")
      .replace("“", "")
      .replace("”", "")
      .replace("” ", ""),
    ["br"]
  );
  let arr = text.split("<br/>");
  let obj = {
    message: arr[0],
    author: arr[1]
  };
  if (arr.length > 2) {
    obj = {
      message: arr[0],
      author: arr[2]
    };
  }
  return obj;
}

module.exports = lib;

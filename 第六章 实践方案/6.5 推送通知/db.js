// 此db.js只用来演示使用

const fs = require("fs");
const _ = require("lodash");
const path = require("path");
const fileName = path.join(__dirname, "db.json");

if (!fs.existsSync(fileName)) {
  fs.writeFileSync(fileName, "[]");
}

function add(params) {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.error(err);
      return false;
    }
    const jsonData = JSON.parse(data.toString());

    for (let i = 0; i < jsonData.length; i++) {
      if (_.isEqual(jsonData[i], params)) {
        console.error('重复数据');
        return false;
      }
    }

    jsonData.push(params);
    fs.writeFile(fileName, JSON.stringify(jsonData, null, 2), function (err) {
      if (err) {
        console.error(err);
        return false;
      }
    });
  });
}

function getAll() {
  try {
    const data = fs.readFileSync(fileName);
    return JSON.parse(data.toString());
  } catch (err) {
    console.error(err);
    return [];
  }
}

function _delete(params) {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.error(err);
      return false
    }
    const jsonData = JSON.parse(data.toString());

    for (let i = 0; i < jsonData.length; i++) {
      if (_.isEqual(jsonData[i], params)) {
        jsonData.splice(i, i)
      }
    }

    fs.writeFile(fileName, JSON.stringify(jsonData, null, 2), function (err) {
      if (err) {
        console.error(err);
        return false
      }
      return true;
    });
  });
}

module.exports = {
  add, getAll, delete: _delete
};

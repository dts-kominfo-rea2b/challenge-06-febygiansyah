// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fncallback) => {
  const result = [];

  //baca file 1
  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      return console.log(`error : ${err}`);
    }
    let tempPesan = JSON.parse(data);
    pesan = tempPesan.message;
    result[0] = pesan.split(" ")[1];

    //baca file 2
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) {
        return console.log(`error : ${err}`);
      }
      let tempPesan2 = JSON.parse(data);
      pesan2 = tempPesan2[0].message;
      result[1] = pesan2.split(" ")[1];
    });

    //baca file 3
    fs.readFile(file3, "utf-8", (err, data) => {
      if (err) {
        return console.log(`error : ${err}`);
      }
      let tempPesan3 = JSON.parse(data);
      pesan3 = tempPesan3[0].data.message;
      result[2] = pesan3.split(" ")[1];
      return fncallback(err, result);
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

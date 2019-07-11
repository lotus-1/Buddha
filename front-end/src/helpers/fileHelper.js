// should have all the function excelToJson() and ..
require('dotenv').config()

// Convert excel file to JSON
const excelToJson = require('xlsx-to-json');
 excelToJson({
    input: "excel.xlsx",
    output: "output.json",
    lowerCaseHeaders: true
 }, function(err, result){
   if(err){
     console.error(err);
   } else {
     console.log("this is result");
   }
 });

const filePath = process.env.file_Path;
console.log("this is my file path: ", filePath);

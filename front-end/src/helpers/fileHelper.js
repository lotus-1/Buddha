// should have all the function excelToJson() and ..
require("dotenv").config();

const filePath = process.env.excel_file_path;

const  excelToJson() = require('xlsx-to-json');
   excelToJson({
 input: filePath,
 output: "output.json",
 lowerCaseHeaders: true
}, function(err, res){
 if(err){
   console.error(err);
 } else {
   console.log("this is result", res);
 }
});

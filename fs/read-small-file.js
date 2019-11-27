
/**
 * 读取一个文件
 * 文件分为小文件和大文件，小文件可以一次性把内容读取出来再处理，大文件需要用文件流处理
 * **/
const fs=require("fs");
const path=require("path");

//1.把要读取的文件路径赋值给fileName
let fileName=path.join(_dirname,'a.html');

//2.读取a.html文件,按照utf-8的编码方式读取
fs.readFile(fileName,{encoding:'utf8'},(err,data)=>{
	if(err)throw err;
	console.log(data);//文件内容读取并打印到控制台
});
//readFileSync是readFile同步版本，没有回调函数，函数返回值就是文件内容。
let fileContent=fs.readFileSync(fileName,{encoding: 'utf8'});
console.log(fileContent);
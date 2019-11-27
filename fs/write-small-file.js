
/**
 * 写入文件
 * 写入文件和读取文件一样，也分为大小文件，小文件可以一次性写入，其他情况可以用流、管道方式解决
 * **/
const fs=require("fs");
const path=require("path");

//1.把当前js目录的a.html文件的路径赋值给fileName
let fileName=path.join(_dirname,'a.html');

//2.写入文件
fs.writeFile(
   fileName,
   '<h1>lemon想写一个可扩展性和可复用性强的程序呢</h1>',
   err=>{
   	if(err) throw err;
   	console.log('文件内容已写入');
   }
);

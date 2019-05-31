/**
 * Created by admin on 2019/5/31.
 * @author lemon<李亦黎>
 */
//读取大文件
const fs=require("fs");
const path=require("path");

// 1.把当前js所在的目录中的a.html文件的路径赋值给 fileName
let fileName=path.join(_dirname,'a.html');

//2.创建读写流
let readStream=fs.createReadStream(fileName,{
	flags:'r', //设置文件只读模式打开文件
	encoding:'utf8'//设置读取文件内容的编码
});

//3.打开文件流的事件
readStream.on('open',fd=>{
	console.log("文件可读流已打开,句柄:%s",fd);
});

//4.可读流打开后，会有源源不断的触发事件方法,回调函数参数就是读取的数据
readStream.on('data',data=>{
	console.log(data);
});

readStream.on('close',()=>{
	console.log('文件可读流结束！');
});


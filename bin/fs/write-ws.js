/**
 * Created by admin on 2019/5/31.
 * @author lemon<李亦黎>
 */
const fs=require("fs");
const path=require("path");

//1.把文件路径赋值给fileName
let fileName=path.join(_dirname,'msg.log');

//2.创建文件的可写流
let ws=fs.createWriteStream(fileName,{start:0});

ws.on('open',function (fd) {
	console.log('要写入的数据文件已打开,文件描述符是:'+fd);
});

//3.监听写入异常事件
ws.on('error',err=>{
	console.log(err);
});

//4.监听写入完成的事件
ws.on('finish',()=>{
	console.log('写入结束');
});

//5.写入100个字符串
for(let i=0;i<100;i++){
	let w_flag=ws.write("thanks for booking.");
	console.log(w_flag);
}
ws.end("写入结束！");
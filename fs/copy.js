
/*文件复制*/
const fs=require("fs");
const path=require("path");

let fileNameSrc=path.join(_dirname,'jdk.dmg');//复制的源文件
let fileNameDist=path.join(_dirname,'jdk1.dmg');//拷贝完的文件目录名

//创建可读流
let rs=fs.creteReadStream(fileNameSrc,{start:0});

//创建可写流
let ws=fs.createWriteStream(fileNameDist,{start:0});

rs.on('data',function (chunk) {
	if(ws.write(chunk)===false){
		//判断数据流是否已写入目标了
		rs.pause();
	}
});

//当可读流结束的时候，让可写流结束
rs.on('end',function () {
	ws.end();
	console.log('文件复制结束');
});

ws.on('drain',function () {
	rs.resume();//继续启动读取数据流
});

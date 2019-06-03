/**
 * Created by admin on 2019/5/31.
 * @author lemon<李亦黎>
 */

//监控文件夹的变化
   //1.引入fs模块
const fs=require("fs");

//2.通过fs.watch方法创建一个fs.FSWatcher类的实例
let watcher=fs.watch(
   _dirname, //监控的文件夹
   {recursive:true},//是否监控子文件夹
   (eventName,fileName)=>{
   	console.log(`事件名称:${eventName},文件名字:${fileName}`)
   }
);

//可以单独注册事件，回调函数跟watch方法一致，还可以监听:error事件
watcher.on('change',(eventType,fileName)=>{
	console.log(`事件名:%s,文件名:%s`,eventType,fileName);
});

setTimeout(()=>{
	//关闭监控
	watcher.close(function (err) {
		if(err){
			console.error(err);
		}
		console.log('关闭watch');
	})
},10000);




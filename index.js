var express=require("express");
var bodyParse=require("body-parser");

var server=express();

//生成解析器 application/x-www-form-urlencoded
var urlencoded=bodyParse.urlencoded({extends:true})

//application/json
var jsonParser=bodyParse.json();

//中间件：把请求体参数 存放到request.body
server.use('/home',jsonParser);

server.post('./home',function(request,response){
console.log(request.body);
response.send(request.body);
})

//创建中间件
// server.use('/',function(request,response,next){
//     console.log("执行中间件");
//     console.log(request.query.page);
//     next()
// })

//访问服务器
// server.get('/',function(request,response){
//     response.send('从数据库中请求数据');
// })

//绑定端口
server.listen(4040);
// console.log("启动4040");
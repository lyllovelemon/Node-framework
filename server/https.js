var fs=require('fs');
var http=require('https');
// var options={
// 	key:fs.readFileSync('./ssl/default.key'),
// 	cert:fs.readFileSync('./ssl/default.cer')
// }
var server=http.createServer(options,function (request,response) {
	
})
server.addContext('foo.com',{
	key:fs.readFileSync('./ssl/foo.com.key'),
	cert: fs.readFileSync('./ssl/foo.com.cer')
})
var options={
	hostname:'www,example.com',
	port:443,
	path:'/',
	method:'GET',
	rejectUnauthorized:false//禁用对证书有效性检查，允许https模块请求开发环境下使用自治证书的https服务器
}
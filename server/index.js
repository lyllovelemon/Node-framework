var http=require("http");
http.createServer(function (request,response) {
	response.writeHead(200,{'Content-type':'text/plain'});
	request.on('data',function (chunk) {
		response.write(chunk);
	})
	request.on('end',function () {
		response.end();
	})
}).listen(80)
// http.createServer(function (request,response) {
// 	var body=[];
// 	console.log(request.method);
// 	console.log(request.headers);
// 	request.on('data',function (chunk) {
// 		body.push(chunk);
// 	})
// 	request.on('end',function () {
// 		body=Buffer.concat(body);
// 		console.log(body.toString());
// 	})
// }).listen(80)

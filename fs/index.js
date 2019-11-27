// var fs=require("fs");
// function copy(src,dst) {
// 	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
// 	//fs.writeFileSync(dst,fs.readFileSync(src));
// }
// function main(argv) {
// 	copy(argv[0],argv[1])
// }
// main(process.argv.slice(2));
// var n=0.00
// console.log(Math.floor(n)===0?n:n.toFixed(2),~~n);
// var reg=/^0|([1-9]{1,5}\.\d{0,2})$/
// console.log(reg.test(n))
let data=[
	{name:'q'},
	{name:'qq'},
	{name:'qs'}
];
const list=[]
data.forEach(item=>{
	item.checked=false
	list.push(item)
	console.log(item)
});
console.log('list',list)

/**
 * Created by admin on 2019/6/3.
 * @author lemon<李亦黎>
 */
const express=require("express");
const app=express();
app.get("/",function (req,res) {
	res.send("Hello lemon!");
});
app.listen(3000,()=>{
	console.log("express app on localhost:3000");
});

var mongodb=require("./mongodb");
var Schema=mongodb.mongonse.Schema;
var movieSchema=new Schema({
    name:String,
    alias:[String],
    publish:Date,
    create_date:{type:Date,default:Date.now},
    images:{
        coverSmall:String,
        coverBig:String
    },
    source:[
        {
            source:String,
            link:String,
            swfLine:String,
            quality:String,
            version:String,
            lang:String,
            subtitle:String,
            create_date:{type:Date,default:Date.now}
        }
    ]
});
var Movie=mongodb.mongonse.model("Movie",movieSchema);
var MovieDao=function(){};

MovieDao.prototype.save=function(obj,callback){
var instance=new Movie(obj);
instance.save(function(err){
    callback(err);
})
}
module.exports=new MovieDao();
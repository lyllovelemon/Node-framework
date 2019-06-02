const mongonse=require("mongoose");
mongonse.connect("mongodb://localhost/nodejs");
exports.mongonse=mongonse;
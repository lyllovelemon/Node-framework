/**
 * Created by admin on 2019/6/3.
 * @author lemon<李亦黎>
 */
/*文件压缩*/
const fs=require("fs");
const zlib=require("zlib");

const gzip=zlib.createGzip();
const inp=fs.createReadStream('input.txt');
const out=fs.createWriteStream('input.txt.gz');
inp.pipe(gzip).pipe(out);
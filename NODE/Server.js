var http=require('http');
var fs =require('fs');
var url =require('url');
var path =require('path');
http.createServer(function (req,res) {
   if(req.url==='/'){
 fs.readFile('./public/first.html','UTF-8',(err,html)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end(html);
 });}
 else if(req.url.match("\.jpeg$")){
    var imgPath= path.join(__dirname,req.url);
    console.log(req.url);
    var fileStream=fs.createReadStream(imgPath);
    res.writeHead(200,{"content-type":"image/jpeg"});
    fileStream.pipe(res);
    
 }
 //console.log(req.url);
}).listen(3000);
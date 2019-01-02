var http = require("http");
var fs = require("fs");
var module1 = require("./module1");
const server = http
  .createServer((request, response) => {
    //   fs.readFile('index.html', (err,data) => {
    //       if(err)
    //         throw err;
    //         response.end(data);
    //   })
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    });
    response.end(module1.module1);
  });
  server.listen(3001);

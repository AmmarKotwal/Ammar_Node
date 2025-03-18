let http_module = require("http");
let {exec} = require("child_process");
let port = 7062;

http_module.createServer(function (request,response) {
    response.writeHead(200,{"content-type" : "text/html"});
    response.write("<h1>Hello World</h1>")
    response.end();
}).listen(port,()=>{
    console.log(`Server is running on port 7062 at http://localhost:${port}`);
    exec(`start http://localhost:${port}`)
})
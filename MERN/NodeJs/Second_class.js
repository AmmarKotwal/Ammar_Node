let http_module =  require("http")
require("dotenv").config()
let {exec} = require("child_process")
let port = process.env.PORT_NO

http_module.createServer(function(request,response) {
    if (request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`<h1>Welcome To Our Website</h1><br><br>
        <a href="/home"><button>Home</button></a>`); 
    }else if (request.url === "/home") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`<h1>Home Page</h1><br><ul>
        <li><a href="/services"><button>Services Page</button></a></li><br>
        <li><a href="/feedback"><button>Feedback Page</button></a></li>
        </ul>`);
    }else if (request.url === "/services") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`<h1>Services Page</h1><br><br><ul>
        <li><a href="/home"><button>Home Page</button></a></li><br>
        <li><a href="/feedback"><button>Feedback Page</button></a></li>
        </ul>`);
    }else if (request.url === "/feedback") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`<h1>Feedback</h1><br><br><ul>
        <li><a href="/home"><button>Home Page</button></a></li><br>
        <li><a href="/services"><button>Services Page</button></a></li>
        </ul>`);
    }else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end("<h1 style='color:red'>Page Not Found</h1>");
    }
}).listen(port,()=>{
    console.log(`Server is running on port 7062 at http://localhost:${port}`);
    exec(`start http://localhost:${port}`)
})

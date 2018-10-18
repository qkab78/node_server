const http = require("http");
const port = 9000;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end();
    console.log("Node.js server running on port " + port);
  })
  .listen(port);

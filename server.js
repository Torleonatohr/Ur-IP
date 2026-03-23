const http = require("http");

const server = http.createServer((req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  console.log("Besucher IP:", ip);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hallo 👋</h1>");
});

server.listen(3000);

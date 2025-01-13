const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to first server");
    return;
  }
  if (req.url === "/about") {
    res.end("this is about page");
    return;
  }

  res.end(`
        <h1>sorry</h1>
        <p>page not found</p>
        <a href="/">back home</a>
        `);
});
server.listen(5000);

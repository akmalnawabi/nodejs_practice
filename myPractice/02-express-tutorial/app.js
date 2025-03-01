const http = require("http");

const {readFileSync} = require("fs");

const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeJs = readFileSync("./navbar-app/browser-app.js");


const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead("200", { "content-type": "text/html" });
    res.write(homePage);
    res.end();

  } else if (url === "/about") {
    res.writeHead("200", { "content-type": "text/html" });
    res.write("hello about page");
    res.end();

  } 
  // styles
  else if (url === "/styles.css") {
    res.writeHead("200", { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  // logo image
  else if (url === "/logo.svg") {
    res.writeHead("200", { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }
  // js part
  else if (url === "/browser-app.js") {
    res.writeHead("200", { "content-type": "text/javascript" });
    res.write(homeJs);
    res.end();
  } 
  
  else {
    res.writeHead("404", { "content-type": "text/html" });
    res.write("sorry page not found");
    res.end();
  }
});

server.listen(5000);

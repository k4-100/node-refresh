const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let message = "";

  switch (req.url) {
    case "/":
      message = `Hello in '${req.url}' (HOME)`;
      break;
    case "/about":
      message = `Hello in '${req.url}' (ABOUT)`;
      break;
    default:
      message = `Hello in '${req.url}' (ERROR)`;
  }

  res.write(message);
  res.end();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

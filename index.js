const http = require("http");
const url = require("url");
const {StringDecoder} = require('string_decoder')

const app = {};

// configuration

app.config = {
  port: 2000,
};

app.createServer = () => {
  const server = http.createServer(app.handleServer);
  // server host out
  server.listen(app.config.port, () => {
    console.log(`The server is runnig ${app.config.port}`);
  });
};

app.handleServer = (req, res) => {
  const parseUrl = url.parse(req.url, true);

  const path =parseUrl.pathname

  const trimmedPath = path.replace(/^\/+|\/+$/g,'');

  const method = req.method.toLowerCase();

  const queryStringObj = parseUrl.query;

  const headearObject = req.headers;

  const decoder = new StringDecoder('utf-8')
  let realData = ''

  req.on('data',(buffer)=>{
    realData+= decoder.write(buffer)
  })

  req.on('end',()=>{
    realData+= decoder.end()

    console.log(realData)

    res.end("I will be real programmers");
  })



};

// server start
app.createServer();

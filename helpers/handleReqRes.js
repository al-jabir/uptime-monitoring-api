const url = require("url");
const { StringDecoder } = require("string_decoder");

const { notFoundHandler } = require("../handlers/routeHandle/notFoundHandler");
const routes = require("../routes");

const handler = {};

handler.handleReqRes = (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const queryStringObj = parseUrl.query;
  const method = req.method.toLowerCase();
  const headerObj = req.headers;

  const reqeustProperties = {
    parseUrl,
    path,
    trimmedPath,
    queryStringObj,
    method,
    headerObj,
  };

  const decoder = new StringDecoder("utf-8");
  let strData = "";
  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      // return the final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

module.exports = handler;

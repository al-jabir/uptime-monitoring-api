const url = require("url");
const {StringDecoder} = require('string_decoder')

const { notFoundHandler } = require('../handlers/routeHandle/notFoundHandler');
const routes = require("../routes");

const handler = {}

handler.handleReqRes = (req,res) => {
   const parseUrl = url.parse(req.url,true);
   const path = parseUrl.pathname
   const trimmedPath = path.replace(/^\/+|\/+$/g,'')
   const queryStringObj = parseUrl.query
   const method = req.method.toLowerCase()
   const headerObj = req.headers

   const reqeustProperties = {
      parseUrl,
      path,
      trimmedPath,
      queryStringObj,
      method,
      headerObj
   }

   const decoder = new StringDecoder('utf-8')
   let strData = ''

   const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]: notFoundHandler

   chosenHandler(reqeustProperties, (statusCode,payload) => {
      statusCode = typeof statusCode === 'number'? statusCode : 500
      payload = typeof payload === 'object' ? payload : {}

      const payloadString = JSON.stringify(payload)

      res.writeHead(statusCode)
      res.end(payloadString)
   })

   req.on('data', (buffer) => {
    strData += decoder.write(buffer)
   })

   req.on('end', () => {
    strData += decoder.end()

    console.log(strData)

    res.end('Hello, I will be Junior Software Developer')
   }) 
}

module.exports = handler;
const handler = {};

handler.userHandler = (requestProperties, callback) => {
  callback(200, { message: "This is user url" });
};

module.exports = handler;

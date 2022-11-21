const handler = {};

handler.notFoundHandler = (reqeustProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found",
  });
};

module.exports = handler;

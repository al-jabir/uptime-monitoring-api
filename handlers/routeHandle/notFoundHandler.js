const handler = {};

handler.notFoundHandler = (reqeustProperties, callback) => {
  console.log(reqeustProperties);
  callback(404, {
    message: "Your requested URL was not found",
  });
};

module.exports = handler;

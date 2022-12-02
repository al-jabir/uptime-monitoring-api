const { mafiaHandler } = require("../handlers/routeHandle/sampleHandler");
const { tokenHandler } = require("../handlers/routeHandle/tokenHandler");
const { userHandler } = require("../handlers/routeHandle/userHandler");
const routes = {
  mafia: mafiaHandler,
  production: mafiaHandler,
  user: userHandler,
  token: tokenHandler,
};

module.exports = routes;

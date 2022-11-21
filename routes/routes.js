const { mafiaHandler } = require("../handlers/routeHandle/sampleHandler");

const routes = {
  mafia: mafiaHandler,
  production: mafiaHandler,
};

module.exports = routes;

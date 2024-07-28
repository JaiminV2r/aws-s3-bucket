const express = require("express");
const config = require("./config");
const fileRoutes = require("./file.route");

/** Create the server */
const server = express();

/** Use fileRoutes */
server.use("/file", fileRoutes);

server.listen(config.port, () => {
  console.info(`Server listing port no.: ${config.port}`);
});

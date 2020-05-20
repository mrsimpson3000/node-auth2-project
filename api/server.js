const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;

const { Router } = require("express");

const usersRouter = require("./users.routes");
const movieNotesRouter = require("./movie-notes.routes");
const movieTagsRouter = require("./movie-tags.routes");
const sessionRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/session", sessionRouter);
routes.use("/movie-notes", movieNotesRouter);
routes.use("/movie-tags", movieTagsRouter);

module.exports = routes;

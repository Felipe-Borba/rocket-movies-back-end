const { Router } = require("express");
const MovieTagsController = require("../controllers/MovieTagsController");
const ensureAuthenticated = require("../middleware/middleware");

const movieTagsRoutes = Router();
const movieTagsController = new MovieTagsController();

movieTagsRoutes.use(ensureAuthenticated);

movieTagsRoutes.get("/", movieTagsController.list);

module.exports = movieTagsRoutes;

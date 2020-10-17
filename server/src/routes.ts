import express from "express";

import placesController from "./controllers/Place";

const routes = express.Router();

routes.get("/places", placesController.index);
routes.get("/places/:id", placesController.show);
routes.post("/places", placesController.create);
routes.put("/places/:id", placesController.update);
routes.delete("/places/:id", placesController.delete);

export default routes;

import express from "express";
import PlaceController from "../controllers/Places";

const PlaceRouter = express.Router();

PlaceRouter.get("/", PlaceController.fetch);
PlaceRouter.post("/", PlaceController.create);
PlaceRouter.put("/", PlaceController.update);
PlaceRouter.delete("/", PlaceController.delete);

export default PlaceRouter;

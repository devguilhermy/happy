import express from "express";
import multer from "multer";
import PlaceController from "../controllers/Places";

const PlaceRouter = express.Router();
import uploadConfig from "../config/upload";
const upload = multer(uploadConfig);

PlaceRouter.get("/", PlaceController.index);
PlaceRouter.get("/:id", PlaceController.show);
PlaceRouter.post("/", upload.array("images"), PlaceController.create);
PlaceRouter.put("/", PlaceController.update);
PlaceRouter.delete("/", PlaceController.delete);

export default PlaceRouter;

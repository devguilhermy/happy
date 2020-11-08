import express from "express";
import multer from "multer";
import PlaceController from "../controllers/Places";

const PlaceRouter = express.Router();
import uploadConfig from "../config/upload";
const upload = multer(uploadConfig);

PlaceRouter.get("/", PlaceController.index);
PlaceRouter.get("/:id", PlaceController.show);
PlaceRouter.post("/", upload.array("images"), PlaceController.create);
PlaceRouter.put("/:id", upload.array("images"), PlaceController.update);
PlaceRouter.delete("/:id", PlaceController.delete);

export default PlaceRouter;

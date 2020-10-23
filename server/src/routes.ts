import express from "express";
import PlacesRouter from "./routes/Places";

const router = express.Router();

router.use("/places", PlacesRouter);

export default router;

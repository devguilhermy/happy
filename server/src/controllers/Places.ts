import fs from "fs";
import path from "path";

import { Request, Response } from "express";
import { getRepository } from "typeorm";

import PlaceModel from "../models/Place";
import PlaceView from "../views/Place";

export default {
    async index(request: Request, response: Response) {
        try {
            const placesRepo = getRepository(PlaceModel);

            const places = await placesRepo.find({
                relations: ["images"],
            });

            return response.status(200).json({
                status: 200,
                message: "Listing places successfully",
                place: PlaceView.renderMany(places),
            });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 400, message: "Error", error });
        }
    },

    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            if (isNaN(parseInt(id))) {
                // throw new Exception;
            }

            const placesRepo = getRepository(PlaceModel);

            const place = await placesRepo.findOneOrFail(id, {
                relations: ["images"],
            });

            return response.status(200).json({
                status: 200,
                message: "Place fetched successfully",
                place: PlaceView.render(place),
            });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 400, message: "Error", error });
        }
    },

    async create(request: Request, response: Response) {
        try {
            const {
                name,
                about,
                instructions,
                working_hours,
                working_weekends,
                latitude,
                longitude,
            } = request.body;

            const requestFiles = request.files as Express.Multer.File[];
            const images = requestFiles.map((file) => {
                return { path: file.filename };
            });

            const placesRepo = getRepository(PlaceModel);

            const place = await placesRepo.create({
                ...request.body,
                images,
            });

            await placesRepo.save(place);

            return response.status(201).json({
                status: 201,
                message: "Place created",
                place,
            });
        } catch (error) {
            return response.status(400).json({
                status: 400,
                message: "Error",
                error,
            });
        }
    },

    async update(request: Request, response: Response) {
        return response.status(202).json({ message: "Updated" });
    },

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const placesRepo = getRepository(PlaceModel);

            const placeToDelete = await placesRepo.findOneOrFail(id);

            await placeToDelete.images.forEach((image) => {
                fs.unlink(
                    path.join(
                        __dirname,
                        "..",
                        "..",
                        "uploads",
                        image.path
                    ),
                    (error) => {
                        return response.status(400).json({
                            status: 400,
                            message: "Impossible to delete images",
                            error,
                        });
                    }
                );
            });

            await placesRepo.remove(placeToDelete);

            return response.status(201).json({
                status: 201,
                message: "Place deleted successfully",
                placeToDelete,
            });
        } catch (error) {
            return response.status(400).json({
                status: 400,
                message: "Error",
                error,
            });
        }
    },
};

import { Request, Response } from "express";
import { getRepository } from "typeorm";

interface Place {
    id: number;
    name: string;
    about: string;
    instructions: string;
    working_hours: string;
    working_weekends: boolean;
    latitude: number;
    longitude: number;
}

export default {
    async index(request: Request, response: Response) {
        try {
            const placesRepo = getRepository("places");

            const places = await placesRepo.find();

            return response.status(200).json({
                status: 200,
                message: "Listing places successfully",
                places,
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

            const placesRepo = getRepository("places");

            const place = await placesRepo.findOneOrFail(id);

            return response.status(200).json({
                status: 200,
                message: "Place fetched successfully",
                place,
            });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 400, message: "Error", error });
        }
    },

    async create(request: Request, response: Response) {
        try {
            const { files } = request;

            const {
                name,
                about,
                instructions,
                working_hours,
                working_weekends,
                latitude,
                longitude,
            } = request.body;

            const placesRepo = getRepository("places");
            const imagesRepo = getRepository("images");

            const place = await placesRepo.create({
                ...request.body,
            });

            await placesRepo.save(place);

            files.forEach((file) => {
                await imagesRepo.create({
                    name: file.name,
                    path: file.path,
                    place_id: place.id,
                });
            });

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
        return response.status(202).json({ message: "Deleted" });
    },
};

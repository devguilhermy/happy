import { Request, Response } from "express";
import { getRepository } from "typeorm";

export default {
    async fetch(request: Request, response: Response) {
        return response.json({ message: "Fetched" });
    },

    async index(request: Request, response: Response) {
        return response.json({ message: "Fetched index" });
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

            const placesRepo = getRepository("places");

            const place = await placesRepo.create({
                ...request.body,
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
        return response.json({ message: "Updated" });
    },

    async delete(request: Request, response: Response) {
        return response.json({ message: "Deleted" });
    },
};

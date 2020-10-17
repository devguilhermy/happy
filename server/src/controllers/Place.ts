import { Request, Response } from "express";

import { getRepository } from "typeorm";
import Place from "../models/Place";

export default {
    async index(request: Request, response: Response) {
        const placesRepository = getRepository(Place);

        const places = await placesRepository.find();

        return response.status(200).json(places);
    },

    async show(request: Request, response: Response) {
        const placesRepository = getRepository(Place);

        const place = await placesRepository.findOneOrFail(
            request.params.id
        );

        return response
            .status(200)
            .json({ message: "Place data fetched", place });
    },

    async create(request: Request, response: Response) {
        const {
            name,
            about,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;

        const placesRepository = getRepository(Place);

        const place = await placesRepository.create({
            name,
            about,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        });

        await placesRepository.save(place);

        response.status(201).json(place);
    },

    async update(request: Request, response: Response) {
        const placesRepository = getRepository(Place);

        const place = await placesRepository.findOneOrFail(
            request.params.id
        );

        const updated = request.body;

        await placesRepository.update(place, updated);

        return response
            .status(200)
            .json({ message: "updated", updated });
    },

    async delete(request: Request, response: Response) {
        const placesRepository = getRepository(Place);

        const deleted = await placesRepository.delete(
            request.params.id
        );

        return response
            .status(200)
            .json({ message: "deleted", deleted });
    },
};

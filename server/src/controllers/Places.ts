import { Request, Response } from "express";

export default {
    async fetch(request: Request, response: Response) {
        return response.json({ message: "Fetched" });
    },

    async create(request: Request, response: Response) {
        return response.json({ message: "Created" });
    },

    async update(request: Request, response: Response) {
        return response.json({ message: "Updated" });
    },

    async delete(request: Request, response: Response) {
        return response.json({ message: "Deleted" });
    },
};

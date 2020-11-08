import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";
import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
import { RepositoryNotFoundError } from "typeorm/error/RepositoryNotFoundError";

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach((err) => {
            errors[err.path] = err.errors;
        });

        return res
            .status(400)
            .json({ message: "Validation failed", errors });
    } else if (error instanceof EntityNotFoundError) {
        return res
            .status(400)
            .json({ message: "There is no record with the identifier provided", error });
    } else if (error instanceof RepositoryNotFoundError){
        return res
            .status(400)
            .json({ message: "Model wasn't found", error }); 
    }

    console.error(error);

    return res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;

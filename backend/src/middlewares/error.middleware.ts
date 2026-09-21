import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api-error.js";

export const globalErrorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            success: false,
            message: err.message,
            errors: err.errors ?? null,
        });
    }

    console.error(err);

    return res.status(500).json({
        statusCode: 500,
        success: false,
        message: "Internal Server Error",
        errors: null,
    });
};
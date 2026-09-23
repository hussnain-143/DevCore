import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-error.js";
import { verifyAccessToken } from "../utils/token.js";

export interface AuthRequest extends Request {
    user?: {
        userId: string;
    };
}

/**
 * Authentication middleware
 * Validates the JWT Bearer token from the Authorization header
 * and attaches the decoded user info to req.user
 */
export const authenticate = (
    req: AuthRequest,
    _res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new ApiError(
                401,
                "Authentication failed: Access token is missing. Please provide a Bearer token in the Authorization header."
            );
        }

        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer" || !token) {
            throw new ApiError(
                401,
                "Authentication failed: Invalid authorization header format. Expected 'Bearer <token>'."
            );
        }

        const decoded = verifyAccessToken(token);

        req.user = {
            userId: decoded.userId,
        };

        return next();
    } catch (error) {
        if (error instanceof ApiError) {
            return next(error);
        }

        return next(
            new ApiError(401, "Authentication failed: Invalid or expired access token")
        );
    }
};
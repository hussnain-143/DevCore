import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "default_dev_access_secret_key";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "default_dev_refresh_secret_key";

export interface JwtPayload {
    userId: string;
}

/**
 * Generate a short-lived JWT access token (15 minutes)
 */
export const generateAccessToken = (userId: string): string => {
    return jwt.sign(
        { userId },
        ACCESS_SECRET,
        {
            expiresIn: "15m",
        }
    );
};

/**
 * Generate a long-lived JWT refresh token (7 days)
 */
export const generateRefreshToken = (userId: string): string => {
    return jwt.sign(
        { userId },
        REFRESH_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

/**
 * Verify an access token and return the decoded payload
 */
export const verifyAccessToken = (token: string): JwtPayload => {
    return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
};

/**
 * Verify a refresh token and return the decoded payload
 */
export const verifyRefreshToken = (token: string): JwtPayload => {
    return jwt.verify(token, REFRESH_SECRET) as JwtPayload;
};
import { Router } from "express";
import {
    userLogin,
    userRefreshToken,
    userRegister,
} from "./user.controller.js";

const userRouter = Router();

/**
 * Public Routes
 */

/**
 * @route   POST /api/v1/user/register
 * @desc    Register a new user account
 * @access  Public
 */
userRouter.post("/register", userRegister);

/**
 * @route   POST /api/v1/user/login
 * @desc    Authenticate user and receive JWT access & refresh tokens
 * @access  Public
 */
userRouter.post("/login", userLogin);

/**
 * @route   POST /api/v1/user/refresh-token
 * @desc    Get a new access token using a valid refresh token
 * @access  Public
 */
userRouter.post("/refresh-token", userRefreshToken);

export default userRouter;

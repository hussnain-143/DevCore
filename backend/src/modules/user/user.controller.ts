import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../../utils/api-error.js";
import { ApiResponse } from "../../utils/api-response.js";
import {
  loginService,
  refreshAccessTokenService,
  registerService,
} from "./user.service.js";
import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
} from "./user.validation.js";

/**
 * @desc    Register a new user account
 * @route   POST /api/v1/user/register
 * @access  Public
 */
export const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validationResult = registerSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new ApiError(
        400,
        "Validation failed: Please check your input fields",
        validationResult.error.flatten().fieldErrors
      );
    }

    const newUser = await registerService(validationResult.data);

    return res
      .status(201)
      .json(new ApiResponse(201, newUser, "Account created successfully"));
  } catch (error) {
    return next(error);
  }
};

/**
 * @desc    Authenticate existing user and issue JWT tokens
 * @route   POST /api/v1/user/login
 * @access  Public
 */
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validationResult = loginSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new ApiError(
        400,
        "Validation failed: Please provide valid credentials",
        validationResult.error.flatten().fieldErrors
      );
    }

    const authData = await loginService(validationResult.data);

    return res
      .status(200)
      .json(new ApiResponse(200, authData, "Login successful"));
  } catch (error) {
    return next(error);
  }
};

/**
 * @desc    Refresh access token using valid refresh token
 * @route   POST /api/v1/user/refresh-token
 * @access  Public
 */
export const userRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validationResult = refreshTokenSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new ApiError(
        400,
        "Validation failed: Refresh token is required",
        validationResult.error.flatten().fieldErrors
      );
    }

    const tokenData = await refreshAccessTokenService(
      validationResult.data.refreshToken
    );

    return res
      .status(200)
      .json(new ApiResponse(200, tokenData, "Access token refreshed successfully"));
  } catch (error) {
    return next(error);
  }
};
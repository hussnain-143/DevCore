import bcrypt from "bcrypt";
import prisma from "../../config/db.js";
import { ApiError } from "../../utils/api-error.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../utils/token.js";
import type { LoginInput, RegisterInput } from "./user.validation.js";

/**
 * Register a new user
 *
 * @param data User registration data (name, email, password)
 * @returns The created user object (excluding the hashed password)
 */
export const registerService = async ({ name, email, password }: RegisterInput) => {
  // Check if a user with this email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new ApiError(409, "An account with this email already exists");
  }

  // Hash the plain-text password with salt rounds = 10
  const hashedPassword = await bcrypt.hash(password, 10);

  // Persist new user in database
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Omit password hash from returned object
  const { password: _excludedPassword, ...userWithoutPassword } = newUser;

  return userWithoutPassword;
};

/**
 * Authenticate existing user and generate JWT tokens
 *
 * @param data User login credentials (email, password)
 * @returns User profile with access and refresh tokens
 */
export const loginService = async ({ email, password }: LoginInput) => {
  // Check if a user with this email exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Ensure user account is active
  if (!existingUser.isActive) {
    throw new ApiError(403, "Your account has been deactivated. Please contact support.");
  }

  // Compare the plain-text password with the stored hash
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Generate JWT access and refresh tokens
  const accessToken = generateAccessToken(existingUser.id);
  const refreshToken = generateRefreshToken(existingUser.id);

  // Omit the password hash from the returned response object
  const { password: _excludedPassword, ...userWithoutPassword } = existingUser;

  return {
    user: userWithoutPassword,
    accessToken,
    refreshToken,
  };
};

/**
 * Generate a new access token from a valid refresh token
 *
 * @param refreshToken Long-lived refresh token
 * @returns New access token
 */
export const refreshAccessTokenService = async (refreshToken: string) => {
  let decodedUserId: string;

  try {
    const decoded = verifyRefreshToken(refreshToken);
    decodedUserId = decoded.userId;
  } catch {
    throw new ApiError(401, "Invalid or expired refresh token");
  }

  // Verify that the user still exists in the database
  const user = await prisma.user.findUnique({
    where: { id: decodedUserId },
    select: { id: true, isActive: true },
  });

  if (!user || !user.isActive) {
    throw new ApiError(401, "User no longer exists or has been deactivated");
  }

  // Generate a fresh access token
  const newAccessToken = generateAccessToken(user.id);

  return {
    accessToken: newAccessToken,
  };
};
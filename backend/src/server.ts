import express, { type Request, type Response } from "express";
import { PORT } from "./constant.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import userRouter from "./modules/user/user.routes.js";
import { ApiError } from "./utils/api-error.js";
import { ApiResponse } from "./utils/api-response.js";

const app = express();

// Request Body Parsing Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base / Root Route
app.get("/", (_req: Request, res: Response) => {
    res.status(200).json(
        new ApiResponse(200, null, "DevCore API is running smoothly")
    );
});

// Health Check Route
app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json(
        new ApiResponse(200, { status: "ok" }, "Server is healthy")
    );
});

// User & Authentication Routes
app.use("/api/v1/user", userRouter);

// 404 Not Found Handler
app.use((req: Request, _res: Response, next) => {
    next(new ApiError(404, `Cannot ${req.method} ${req.originalUrl}`));
});

// Global Error Handler
app.use(globalErrorHandler);

export const server = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

export { app };
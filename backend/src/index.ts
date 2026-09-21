import "dotenv/config";
import { server } from "./server.js";

try {
    server();
} catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
}

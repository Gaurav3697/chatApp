import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

// Load environment variables from the .env file
dotenv.config();  // Load dotenv before accessing environment variables

const app = express();

//route imports
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoute from "./routes/messageRoutes.js";

// Use packages
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes );
app.use("/api/message", messageRoute );

const PORT = process.env.PORT // Provide a fallback port in case the environment variable is not set

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToMongoDB();
});

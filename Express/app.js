import express from "express";


import userRouter from "./routes/UserRouter.js";
import ProfileRouter from "./routes/profileRoutes.js";
const app = express();

app.use(express.json());//middleware to parse json bodies

app.use("/api/users",userRouter);//registering the router middleware
app.use("/api/profile",ProfileRouter);//registering another router middleware
export default app;

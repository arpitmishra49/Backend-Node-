import express from "express";
const ProfileRouter = express.Router();

ProfileRouter.get("/", (req, res) => {
    res.send("GET request to /profile");
});
ProfileRouter.post("/", (req, res) => {
    res.send("POST request to /profile");
});
export default ProfileRouter;
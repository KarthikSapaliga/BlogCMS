import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.get("/", (req, res) => {
    console.log(">> check server");
    return res.status(200).json({ message: "server is running" });
});

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});

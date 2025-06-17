import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.send(`
    <div style="text-align:center; margin-top:20px;">
        <h1>Server is running</h1>
    </div>    
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});

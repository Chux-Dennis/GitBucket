// require("dotenv").config();
import dotenv from "dotenv"
dotenv.config()

import express from "express";
import Upload from "./routes/upload-route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

const apiVersion = "api/v1"

//Routes
app.use("/",Upload)


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

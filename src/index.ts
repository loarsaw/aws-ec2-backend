import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { pdf_controller } from "./controller/ReportCard.Controller";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.get("/report", pdf_controller);
app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });

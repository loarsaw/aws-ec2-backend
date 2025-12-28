"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const ReportCard_Controller_1 = require("./controller/ReportCard.Controller");
const cors_1 = __importDefault(require("cors"));
const User_Controller_1 = require("./controller/User.Controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.json({ msg: "Changes Made for API" });
});
app.get("/report", ReportCard_Controller_1.pdf_controller);
app.post("/get_data", User_Controller_1.user_data_controller);
app
    .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
})
    .on("error", (error) => {
    throw new Error(error.message);
});

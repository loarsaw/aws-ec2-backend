"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdf_controller = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const student = {
    uid: "S010",
    name: "Laura Anderson",
    marks: {
        test1: 89,
        test2: 91,
        test3: 90,
        test4: 92,
        finalExam: 94,
    },
    attendance: 97,
    fatherName: "Joshua Anderson",
    mobileNo: "012-345-6789",
    class: "10E",
    graduationYear: 2024,
};
const generateReportCard = (student) => {
    return new Promise((resolve, reject) => {
        const doc = new pdfkit_1.default({ margin: 50 });
        const outputPath = "output/output.pdf";
        const writeStream = fs_1.default.createWriteStream(outputPath);
        doc.pipe(writeStream);
        doc.fontSize(20).text("Student Report Card", { align: "center" });
        doc.moveDown(2);
        doc.fontSize(18).text(student.name, { align: "center" });
        doc.moveDown(1.5);
        doc.fontSize(16);
        doc
            .text(`UID: ${student.uid}`, { continued: true })
            .text(`    Class: ${student.class}`, { continued: true })
            .text(`    Graduation Year: ${student.graduationYear}`);
        doc.moveDown(1);
        doc
            .text(`Father's Name: ${student.fatherName}`, { continued: true })
            .text(`    Mobile No: ${student.mobileNo}`, { continued: true })
            .text(`    Attendance: ${student.attendance}%`);
        doc.moveDown(1.5);
        doc.fontSize(16).text("Marks:", { underline: true });
        doc.moveDown(0.5);
        const marksTable = [
            ["Test 1", student.marks.test1],
            ["Test 2", student.marks.test2],
            ["Test 3", student.marks.test3],
            ["Test 4", student.marks.test4],
            ["Final Exam", student.marks.finalExam],
        ];
        const tableTop = doc.y;
        const itemHeight = 30;
        const tableWidth = 300; // Approximate width of the table content
        const pageWidth = doc.page.width;
        const startX = (pageWidth - tableWidth) / 2; // Calculate start position for centering
        // Draw table header
        doc.fontSize(14);
        doc
            .rect(startX, tableTop, tableWidth, itemHeight)
            .fillAndStroke("#d3d3d3", "#000000");
        doc.fillColor("#000000").text("Subject", startX + 15, tableTop + 10);
        doc.text("Marks", startX + 200, tableTop + 10);
        // Draw table rows
        marksTable.forEach((row, index) => {
            const y = tableTop + (index + 1) * itemHeight;
            doc.fontSize(14);
            doc.rect(startX, y, tableWidth, itemHeight).stroke();
            doc.text(row[0], startX + 15, y + 10);
            doc.text(row[1], startX + 200, y + 10);
        });
        doc.end();
        writeStream.on("finish", () => {
            resolve(outputPath);
        });
        writeStream.on("error", (err) => {
            reject(err);
        });
    });
};
const pdf_controller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   const {} = req.body;
        const filePath = yield generateReportCard(student);
        // res.download(filePath);
        const file_path = "output/output.pdf";
        res.download(file_path);
    }
    catch (err) {
        res.json("hello");
    }
});
exports.pdf_controller = pdf_controller;

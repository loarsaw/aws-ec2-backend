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
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_data_controller = void 0;
const user_data_controller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
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
    });
});
exports.user_data_controller = user_data_controller;

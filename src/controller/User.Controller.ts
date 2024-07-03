import { Request, Response } from "express";

export const user_data_controller = async (req: Request, res: Response) => {
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
};

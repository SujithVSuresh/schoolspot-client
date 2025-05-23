
  export interface ExamType {
    _id: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate: Date;
  }


export interface ExamResultType {
    _id: string;
    examId: ExamType;
    classId: string;
    subject: string;
    studentId: string;
    marksObtained: number;
    totalMarks: number;
    grade?: string;
  }
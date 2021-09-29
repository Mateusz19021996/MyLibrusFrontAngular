export interface GetStudentDTO {
    
    id: number;
    name: string;
    lastName: string;
    studentClass: string;
    street: string
    age: number;
    mail: string;
    grades: Grade[];    
    //
}

export class Grade {

    singleGrade: number;
    subject: string;
    studentFirstName: string;
}


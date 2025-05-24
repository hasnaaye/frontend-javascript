export namespace Subjects {
  export interface Teacher{
    firstName: string;
    lastName: string;
  }

  export class Subject {
    private teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeaching?: number;
  }
}
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
}

namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

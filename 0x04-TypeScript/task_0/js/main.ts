interface Student {
  firstName: string, 
  lastName: string, 
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Hamza",
  lastName: "Manssouri",
  age: 22,
  location: "Tetouan"
};

const student2: Student = {
  firstName: "Ali",
  lastName: "Adbib",
  age: 25,
  location: "Tanger"
};

const studentsList: Student[] = [student1, student2];

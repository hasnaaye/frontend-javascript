interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{  
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string{
    return "Getting to director tasks";
  }
}
class implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workDirectorTasks(): string{
    return "Getting to work";
  }
}

function createEmployee(salary: number | string):  Director | Teacher{
  if (typeof salary === "number" && salary < 500){
    return new Teacher(); 
  }else {
    return new Director();
  }
}
console.log(createEmployee(200));
//Teacher
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
//Director

function isDirector (employee): Director | Teacher{
  
}
function executeWork(employee: Director | Teacher): string{
  if (employee){}
}
executeWork(createEmployee(200));
//Getting to work
executeWork(createEmployee(1000));
//Getting to director tasks

type Subjects = "Math" | "History";

function techclass(todayClass: subjects): string{
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}
teachClass('Math');
//Teaching Math
teachClass('History');
//Teaching History

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

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Append student rows
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const nameCell: HTMLTableCellElement = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Final table setup
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table)

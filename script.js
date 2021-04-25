const objectNames = ["Math","Physics","Geograghy","Chemistry"];
const students = [
    {
        name:"John",
        lastname: "Doe",
        grades : [99,35,100,70]
    },
    {
        name:"Annie",
        lastname: "Mcfly",
        grades : [59,88,60,75]
    },
    {
        name:"Jake",
        lastname: "White",
        grades : [44,87,99,30]
    },
]

const tableRef = document.querySelector(".myTable");

// generate header
let headerRow = document.createElement("tr");
let fullnameCell = document.createElement("td");
fullnameCell.textContent = "full name"
headerRow.appendChild(fullnameCell);

for (let i = 0; i < objectNames.length; i++) {
    let objectNameCell = document.createElement("td");    
    objectNameCell.textContent = objectNames[i];
    headerRow.appendChild(objectNameCell);
}
tableRef.appendChild(headerRow);

// calculate average scores
let mathTotal = 0;
let physicsTotal = 0;
let geographyTotal = 0;
let chemistryTotal = 0;

for (let i = 0; i < students.length; i++) {
    mathTotal += students[i].grades[0];
    physicsTotal += students[i].grades[1];
    geographyTotal += students[i].grades[2];
    chemistryTotal += students[i].grades[3];
}
// console.log({mathTotal},{physicsTotal},{geographyTotal},{chemistryTotal});
let mathAvg = mathTotal / students.length;
let physicsAvg = physicsTotal / students.length;
let geographyAvg = geographyTotal / students.length;
let chemistryAvg = chemistryTotal / students.length;

for (let i = 0; i < students.length; i++) {
    let studentRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = students[i].name + " " + students[i].lastname;

    let mathCell = document.createElement("td");
    mathCell.textContent = students[i].grades[0];
    if (students[i].grades[0] < mathAvg){
        mathCell.classList.add("red-text");
    } else {
        mathCell.classList.add("green-text");
    }

    let physicsCell = document.createElement("td");
    physicsCell.textContent = students[i].grades[1];
    if (students[i].grades[1] < physicsAvg){
        physicsCell.classList.add("red-text");
    } else {
        physicsCell.classList.add("green-text");
    }

    let geographyCell = document.createElement("td");
    geographyCell.textContent = students[i].grades[2];
    if (students[i].grades[2] < geographyAvg){
        geographyCell.classList.add("red-text");
    } else {
        geographyCell.classList.add("green-text");
    }

    let ChemistryCell = document.createElement("td");
    ChemistryCell.textContent = students[i].grades[3];
    if (students[i].grades[3] < chemistryAvg){
        ChemistryCell.classList.add("red-text");
    } else {
        ChemistryCell.classList.add("green-text");
    }

    studentRow.appendChild(nameCell);
    studentRow.appendChild(mathCell);
    studentRow.appendChild(physicsCell);
    studentRow.appendChild(geographyCell);
    studentRow.appendChild(ChemistryCell);
    tableRef.appendChild(studentRow);
}

// display average scores
let averageScoresRow = document.createElement("tr");

let emptyCell = document.createElement("td");
emptyCell.textContent = "   ";

let mathAvgCell = document.createElement("td");
mathAvgCell.textContent = mathAvg;

let physicsAvgCell = document.createElement("td");
physicsAvgCell.textContent = physicsAvg;

let geographyAvgCell = document.createElement("td");
geographyAvgCell.textContent = geographyAvg;

let chemistryAvgCell = document.createElement("td");
chemistryAvgCell.textContent = chemistryAvg;

averageScoresRow.appendChild(emptyCell);
averageScoresRow.appendChild(mathAvgCell);
averageScoresRow.appendChild(physicsAvgCell);
averageScoresRow.appendChild(geographyAvgCell);
averageScoresRow.appendChild(chemistryAvgCell);
tableRef.appendChild(averageScoresRow);

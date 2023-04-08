'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Employee(id, fullName, department, level) {
  this.employeeId = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
}


Employee.prototype.getSalary = function () {

  let balance=0;
  let netSalary=0;
  let tax=0;
  if (this.level == "Senior") {
    balance = getRndInteger(2000, 1500);
  }
  else if (this.level == "Mid-Senior") {
    balance = getRndInteger(1500, 1000);
  }
  
  else {
    balance = getRndInteger(1000, 500);
  }
  
  tax= Math.floor (balance*7.5 /100);
 
  

  netSalary = balance - tax;
  return netSalary;
}

const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
const lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
const omar = new Employee(1004, "Omar Zaid", "	Development", "Senior");
const rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


// document.write("")
document.write(`<h6>${ghazi.fullName} : ${ghazi.getSalary()}</h6>`);
document.write(`<h6>${lana.fullName} : ${lana.getSalary()}</h6>`);
document.write(`<h6>${tamara.fullName} : ${tamara.getSalary()}</h6>`);
document.write(`<h6>${safi.fullName} : ${safi.getSalary()}</h6>`);
document.write(`<h6>${omar.fullName} : ${omar.getSalary()}</h6>`);
document.write(`<h6>${rana.fullName} : ${rana.getSalary()}</h6>`);
document.write(`<h6>${hadi.fullName} : ${hadi.getSalary()}</h6>`);


var tableData = [  [`${ghazi.fullName} `, `${ghazi.getSalary()}`],
  [`${lana.fullName}` , `${lana.getSalary()}`],
  [`${tamara.fullName}` , `${tamara.getSalary()}`],
  [`${safi.fullName}` , `${safi.getSalary()}`],
  [`${omar.fullName}` , `${omar.getSalary()}`],
  [`${rana.fullName}` , `${rana.getSalary()}`],
  [`${hadi.fullName}` , `${hadi.getSalary()}`],
];

var table = document.createElement("table");
table.setAttribute("class", "my-table");

for (var i = 0; i < tableData.length; i++) {
  var row = document.createElement("tr");
  
  for (var j = 0; j < tableData[i].length; j++) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(tableData[i][j]);
    
    if (i === 0) { // add h6 elements to header cells
      var header = document.createElement("h6");
      header.appendChild(cellText);
      cell.appendChild(header);
    } else {
      cell.appendChild(cellText);
    }
    
    row.appendChild(cell);
  }
  
  table.appendChild(row);
}

document.getElementById("my-table").appendChild(table);

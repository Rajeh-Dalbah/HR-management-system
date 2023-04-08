'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Employee(id, fullName, department, level, imgUrl, saraly) {
  this.employeeId = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imgUrl = imgUrl;
  this.saraly = saraly;
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

Employee.prototype.renderEmployee = function () {
  document.write(`<h6>${this.fullName} : ${this.getSalary()}</h6>`);
  
  
}

const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
const lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
const omar = new Employee(1004, "Omar Zaid", "	Development", "Senior");
const rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

ghazi.renderEmployee();
hadi.renderEmployee();
tamara.renderEmployee();
safi.renderEmployee();
omar.renderEmployee();
rana.renderEmployee();
hadi.renderEmployee();
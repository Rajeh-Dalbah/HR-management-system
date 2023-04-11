'use strict';

let empForm = document.getElementById('empForm');
let empSec = document.getElementById('empSec');
empSec.style.display = "inline";
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Employees(id, fullName, department, level, imgUrl, salary) {
  this.employeeId = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imgUrl = `./assets/${imgUrl}.jpg`;
  this.salary = salary;

}


Employees.prototype.getSalary = function () {

  let balance = 0;
  let netSalary = 0;
  let tax = 0;
  if (this.level == "Senior") {
    balance = getRndInteger(2000, 1500);
  }
  else if (this.level == "Mid-Senior") {
    balance = getRndInteger(1500, 1000);
  }

  else {
    balance = getRndInteger(1000, 500);
  }

  tax = Math.floor(balance * 7.5 / 100);



  netSalary = balance - tax;
  this.salary = netSalary;
  return netSalary;
}

// Employees.prototype.renderEmployee = function () {
//   document.write(`<h6>${this.fullName} : ${this.getSalary()}</h6>`);


// }

Employees.prototype.render = function () {
  var div1 = document.createElement('div');
  var img = document.createElement('img');
  var div2 = document.createElement('div');
  var h5 = document.createElement('h5');


  div1.setAttribute("class", "card")
  img.setAttribute("class", "img")
  div1.setAttribute
  div1.appendChild(img);
  h5.textContent = ` Name: ${this.fullName}  ID:${this.employeeId}  Department:${this.department} 
                 Level:${this.level}
                 Salary:${this.salary}`;
  div2.setAttribute("class", "container");
  div2.appendChild(h5);
  div1.appendChild(div2);



  img.setAttribute('src', this.imgUrl);
  empSec.appendChild(div1);

}

var generatID = (function (num) {
  return function () {
    var str = String(num++);
    while (str.length < 4) str = "0" + str;
    return str;
  }
})(1);
function handelSubmit(event) {
  event.preventDefault();
  let fullName = event.target.fn.value;
  let department = event.target.departments.value;
  let level = event.target.Level.value;
  let imgUrl = event.target.img.value;
  let newemp = new Employees(generatID(), fullName, department, level, imgUrl);
  let salary1 = newemp.getSalary();
  newemp.render();

}

empForm.addEventListener('submit', handelSubmit);

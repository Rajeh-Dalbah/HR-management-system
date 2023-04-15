// let empSec = document.getElementById('tableSec');
// let table = document.getElementById('table');
// let divT = document.getElementById('divTable');
let aCount = document.getElementById('adminCount');
let mCount = document.getElementById('marketingCount');
let dCount = document.getElementById('developCount');
let fCount = document.getElementById('financeCount');
let tcount = document.getElementById('employeescount');
let a = document.getElementById('a');
let m = document.getElementById('m');
let d = document.getElementById('d');
let f = document.getElementById('f');
let t = document.getElementById('t');
let totalSalaryA = document.getElementById('totalSalaryA');
let totalSalaryB = document.getElementById('totalSalaryB');
let totalSalaryC = document.getElementById('totalSalaryC');
let totalSalaryD = document.getElementById('totalSalaryD');
let total = document.getElementById('total');
let allEmplo = [];
let jsonArr = localStorage.getItem('employees');
let arr = JSON.parse(jsonArr);
function checkLocalAndPush() {
    if (allEmplo.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmplo = arr;
        }
    }
}
function readFromLocalS() {
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function render(arr) {
    let adminCount = 0;
    let marketingCount = 0;
    let developCount = 0;
    let financCount = 0;
    let totalOfA = 0;
    let totalOfM = 0;
    let totalOfD = 0;
    let totalOfF = 0;    
    
    let employeesCount = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j].department == "Administration") {
            adminCount++;
            totalOfA += arr[j].salary;
            
        }
        else if (arr[j].department == "Marketing") {
            marketingCount++;
            totalOfM += arr[j].salary;
        }
        else if (arr[j].department == "Development") {
            developCount++;
            totalOfD += arr[j].salary;
        }
        else if (arr[j].department == "Finance") {
            financCount++;
            totalOfF += arr[j].salary;
        }


    }
    
    employeesCount = adminCount + financCount + developCount + marketingCount;
    aCount.textContent = adminCount;
    mCount.textContent = marketingCount;
    dCount.textContent = developCount;
    fCount.textContent = financCount;
    tcount.textContent = employeesCount;
    
    totalSalaryA.textContent = totalOfA;
    totalSalaryB.textContent =totalOfM;
    totalSalaryC.textContent = totalOfD;
    totalSalaryD.textContent = totalOfF;
    
    total.textContent= totalOfA+totalOfM+totalOfD+totalOfF;
    
    let adminAvgSalary = adminCount != 0 ? (totalOfA / adminCount) : 0;
    a.textContent = adminAvgSalary;
    let marketingAvgSalary = marketingCount != 0 ? (totalOfM / marketingCount) : 0;
    m.textContent = marketingAvgSalary;
    let developAvgSalary = developCount != 0 ? (totalOfD / developCount) : 0;
    d.textContent = developAvgSalary;
    let financAvgSalary = financCount != 0 ? (totalOfF / financCount) : 0;
    f.textContent = financAvgSalary;
    t.textContent = adminAvgSalary + marketingAvgSalary + developAvgSalary + financAvgSalary;


}
render(readFromLocalS());
console.log(readFromLocalS());

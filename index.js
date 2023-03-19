function myFunction() {
    let marks = document.getElementById("myText").value;
    let grade = "D";
    if (marks > 30){
        grade = 'C';
    }
    if(marks > 40){
        grade = 'B'
    }
    if(marks > 50){
        grade = 'A';
    }
    document.getElementById('grade').innerHTML = 'Your grade is: ' + grade;
}

function mySpeedFunction(){
    let speed = document.getElementById("speedvalue").value;

speed = parseInt(speed);  // convert the input to an integer

if (speed < 70) {  // check if the speed is less than 70 km/h
    document.getElementById('demeritsr').innerHTML = 'OK';
    console.log("Ok");
} else {
    let demerit_points = Math.floor((speed - 70) / 5);  // calculate the demerit points
    document.getElementById('demeritsr').innerHTML = "Points: " + demerit_points;
    console.log("Points: " + demerit_points);

    if (demerit_points >= 12) {  // check if the driver has more than 12 demerit points
        document.getElementById('demeritsr').innerHTML = "Points: " + demerit_points + " License suspended"; 
        console.log("License suspended");
    }
}
}

function mySalaryFunction(){


// Define the KRA, NHIF, and NSSF rates
const KRA_RATE = 0.3;
const NHIF_RATE = 0.015;
const NSSF_RATE = 0.06;

// Get the user's inputs
const basicSalary = parseInt(document.getElementById("basic_salary").value);
const benefits = parseInt(document.getElementById("benefits").value);

// Calculate the gross salary
const grossSalary = basicSalary + benefits;

// Calculate the payee (tax) based on the KRA rates
let payee = 0;
if (grossSalary <= 24000) {
  payee = 0;
} else if (grossSalary <= 40000) {
  payee = (grossSalary - 24000) * 0.1;
} else {
  payee = (16000 * 0.1) + ((grossSalary - 40000) * 0.25);
}

// Calculate the NHIF deduction based on the NHIF rate
const nhifDeduction = Math.min(grossSalary * NHIF_RATE, 1700);

// Calculate the NSSF deduction based on the NSSF rate
const nssfDeduction = Math.min(grossSalary * NSSF_RATE, 200);

// Calculate the net salary
const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

// Print the results
document.getElementById('salary_result').innerHTML = `Gross salary: KES ${grossSalary} <br> Payee (tax): KES ${payee} <br> NHIF deduction: KES ${nhifDeduction} <br> NSSF deduction: KES ${nssfDeduction} <br> Net salary: KES ${netSalary}`
// console.log(`Gross salary: KES ${grossSalary.toFixed(2)}`);
// console.log(`Payee (tax): KES ${payee.toFixed(2)}`);
// console.log(`NHIF deduction: KES ${nhifDeduction.toFixed(2)}`);
// console.log(`NSSF deduction: KES ${nssfDeduction.toFixed(2)}`);
// console.log(`Net salary: KES ${netSalary.toFixed(2)}`);
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
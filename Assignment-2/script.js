// // Exercise-1
// let num = prompt("Enter a Number: ");
// if (!isNaN(num) && num.trim() !== "") {
//     if (num > 0) {
//         console.log("The Number Is Positive. " + num);
//     }
//     else if (num < 0) {
//         console.log("The Number Is Negative. " + num);
//     }
//     else {
//         console.log("The Number Is Zero : " + num);
//     }
// }
// else {
//     console.log("Invalid input! Please enter a valid number.");
// }

// //Exercise-2
// let num2 = prompt("Enter a Number: ");
// if(!isNaN(num2) && num2.trim() !== "") {
//     if (num2 % 2 === 0) {
//         console.log("Its a Even Number. " + num2);
//     }
//     else {
//         console.log("Its a Odd Number. " +num2);
//     }
// }
// else {
//     console.log("Invalid input! Please enter a valid number.");
// }

// // Exercise-3
// let vote = prompt("What is Your Age? ");
// if (!isNaN(vote) && vote.trim() !== "") {
//     if(vote >= 18) {
//         console.log("Congratulations! You are Eligible to Vote...");
//     }
//     else {
//         console.log("You are Noooot Eligible.");
//     }
// }
// else {
//     console.log("Invalid input! Please enter Your Age.");
// }

// Exercise-4
// let input1 = prompt("Input-1 - Enter a Number to Compare to Another One : ");
// let input2 = prompt("Input-2 - Enter a Number to Compare to Another One : ");
// if(!isNaN(input1) && !isNaN(input2) && input1.trim() !=="" && input2.trim() !== "") {
//     if(input1 > input2) {
//         console.log(`Input-1 = ${input1} which is Greater then Input-2 = ${input2}`);
//     }
//     else if(input2 > input1) {
//         console.log(`Input-2 = ${input2} which is Greater then Input-1 = ${input1}`);
//     }
//     else{
//         console.log(`Input-1 = ${input1} & Input-2 = ${input2} Both are Equall` );
//     }
// }
// else {
//         console.log("Invalid input! Please enter Your Age.");
//     }

//Exercise-5
// let age = prompt("Enter your age:");
// let memberShipCard = prompt("Do you have a membership card? (yes/no)").toLowerCase() === "yes";

// if (age >= 60 || memberShipCard) {
//     alert("You are eligible for a discount!");
// } else {
//     alert("Sorry, you are not eligible for a discount.");
// }

//Exercise-6
// let userName = prompt("Enter Your User Name :");
// let password = parseInt(prompt("Enter Your Password :"));

// if(userName.toLowerCase() === "admin" && password === 12345) {
//     alert("Login Successful");
// }
// else {
//     alert("Invaid Credentials");
// }

//Exercise-7 
let marks = parseInt(prompt("Enter Your Marks : "));

if(!isNaN(marks) && marks !== "") {
    if(marks > 100) {
        alert("Wrong Input! => Maximum Marks is 100, Please Try Again...");
    }
    else if (marks >= 90) {
        alert(`Congratullations! marks ${marks} Your Grade is A`);
    }
    else if (marks >= 80) {
        alert(`Congratullations! marks ${marks} Your Grade is B`);
    }
    else if (marks >= 70) {
        alert(`Congratullations! marks ${marks} Your Grade is C`);
    }
    else if (marks >= 60) {
        alert(`Congratullations! marks ${marks} Your Grade is D`);
    }
    else alert(`Fail! => Try Hard May be You are Lucky Next Time`);
}
else {
        alert("Invalid input! Please enter a valid number.");
    }


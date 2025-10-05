/* Prototype: Aik object ki property ko doosre object mein copy karne ke liye prototype istemaal hota hain. */

// For Example

let student_Computer_Science = {

    subject_1 : "COAL",
    subject_2 : "AICT"

}

let student_Computer_Engineering = {

    subject_3 : "Computer Networks",
    subject_4 : "Hardware"

}

Object.setPrototypeOf(student_Computer_Engineering, student_Computer_Science);

console.log(student_Computer_Engineering.__proto__.subject_1);
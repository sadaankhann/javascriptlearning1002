// /* Destructing is a Javascript feature which helps us to extract array and object values and store them on variable.

// It is also a better to assign values to multiple variables at once

let [science, maths, english] = [87,76,92];
console.log(science);
console.log(maths);
console.log(english);

// Array Destructuring

let fruits = ["Apple", "Banana", "Orange", "Mango"];
let [fruit_1, fruit_2, fruit_3] = fruits;
console.log(fruit_1);
console.log(fruit_2);
console.log(fruit_3);

// Skipping Elements

let numbers = [98,10,76,87,59];
let [sadaan,,izhan,waqar] = numbers;

console.log(sadaan, izhan, waqar);

// Default Values(If no value is assigned)

let [a=1, b=3] = [100];
console.log(a);
console.log(b);

/* Destructuring with objects */

const student_portolio= {

    name__ : "Sadaan Khan",
    current_semester : 5,
    gender : "Male",
    phone_num : 3111778084

}

const {name__, current_semester} = student_portolio;
console.log(name__);
console.log(current_semester);

/* Note: The variable in which we are storing the required object value, Should have the same name as its key. */

/* To user other variable name in place of key, We can do this: */

const {name__: username, current_semester: current_sem} = student_portolio;
console.log(username, current_sem);

// Default Values With Objects

const result = {

    science_ : 98,
    maths_ : 68,
    english_ : 99

}

const{science_ = 67, maths_} = result;
console.log(science_);
console.log(maths_);

/* Nested Destructing */

const idCardDetails = {

    legalName : "Sadaaan Khan",
    age : 19,
    cardNo : 2993,
    address : {

        previousAddress : "xxx ubwdw wbdwd",
        currentAddress : "idww jodj wdjow jdjw jdwjdpwd"

    }

}

const {address : {previousAddress , currentAddress}} = idCardDetails;
console.log(previousAddress);
console.log(currentAddress);

/* Real World Use Cases */

// 1. Handling Complex Data From API

const response = {

    status_ : 200,
    data : {user : "Sami", token : "abc@123"}

}

const {status_ , data: {user, token}} = response;
console.log(status_, user, token);


// 2. Passing the object as a function parameter

function greet({name__1, age}){

    console.log(`Hello ${name__1}, You have turned ${age}, Wihing you a very happy birthday!`);

}

const obj_ = {

    name__1 : "Ali",
    age : 21

}

greet(obj_);

// 3. To Swap Variables

let [c,d] = [1,2];
console.log(c,d);
[c,d] = [d,c];
console.log(c,d);

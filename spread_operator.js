/*Spread Operator is used to spread values array and object values, It spreads them into individual values. */

// It can be used in multiple ways:

//1. Combining Two Arrays

let arr_1 = [1,2,3,4,5];
let arr_2 = [6,7,8,9,10];

let combination_two_arrays = [...arr_1, ...arr_2];
console.log(combination_two_arrays);

// 2. Array Copying

let copying_array_1 = [...arr_1];
console.log(copying_array_1);


const obj_1 = {
    name : "Sadaan",
    section : 'F',
    roll_no : 9293
}

// 4. Combining Two Objects 

const obj_2 = {

    university : "Sir Syed University of Engineering & Technology"

}

const combining_two_objects = {...obj_1, ...obj_2};
console.log(combining_two_objects);

// 4. To pass multiple values as parameters 

function sum(a,b,c){

    return a+b+c;

}

let arr = [1,2,3];
let answer = sum(...arr);
console.log(answer);

// 5. To convert an array into an object(Keys Will Be The Indexes)

let names = ["Sadaan", "Waqar", "Izhan", "Sameer"];
const array_into_object = {...names};

console.log(array_into_object);
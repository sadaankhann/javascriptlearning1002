/*There are three different types of scopes in javascript: */

/* 1. Local Scope: A variable declaration inside a local scope cannot be accessed outside that scope. */ 

// (let and const are effected)

// For Example:

{
    let name_ = "Sadaan";
    const id = 849;

}

// console.log(name_);
// console.log(id);

/* 2. Global Scope */

/* Variables who declares globally are accessible everywhere. */

// (No one is effected)

let user_name = "Sadaan";
const user_id = 393;

{
    console.log(user_name);
    console.log(user_id);
}

function data(name_, id_){

    console.log("User name is: ",name_," and his id is: ",id_);

}
data(user_name, user_id);


/* 3. Function Scope */

// (let, const and var is effected)

function hello(){

    let namee = "Azlan";
    const idd = 444;
    var agee = 29;

}

console.log(namee);
console.log(idd);
console.log(agee);

/* 4. Lexical Scope */

// Inner function can access the variable declaration of outer function.

function outer() {
  let outerVar = "I am outside!";

  function inner() {
    console.log(outerVar); // Accessing outer variable
  }

  inner();
}

outer();

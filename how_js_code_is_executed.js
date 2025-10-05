// JavaScript program is executed in two ways:

/* 1. Scanning(Memory Allocation)
   2. Actual Execution
*/

// 1. Scanning(Memory Allocation)

/* In first iteration of our code execution, No actual execution is made, It only searches for template literals like let, const and var, And signed their values as undefined. */

// For example hamare pass ye code hain:


let firstName = "Sadaan";
let lastName = "Khan";
const birthYear = 2006;

// For example, The JIT found this variable firstName, This variable then gets memory for storage, And in that memory "Sadaan" will not be it's value, Initially it will be undefined.

firstName = undefined;

// 2. Actual Execution

/*In first execution, The scanning was done, Where each variable got memory for its value, and instead of their actual value undefined got stored, After all that second execution will start where each variable gets its actual value as 'value', instead of undefined, Unless the actual value of a variable is undefined. */

firstName = "Sadaan";
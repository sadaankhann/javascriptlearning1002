function getNumber(num) {

    if (isNaN(num)) {

        throw SyntaxError("Enter a number only!");

    }

}

// getNumber("hello");

// ---------------------------------


let subjects;

function accessingObject(sub_name) {

    try{

        console.log(subjects[sub_name]);

    }

    catch(error) {

        console.log(TypeError("Something went wrong!", error.message));

    }



}

// accessingObject("english");


// ------


function division(num_1,num_2){


        if(num_2 == 0){

            throw("Zero Cannot be divide by any number!");

        }

        else{

            let calculation_ = num_1/num_2;
            console.log(calculation_);

        }




}

division(15,0);
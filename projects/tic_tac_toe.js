const buttonClick = document.querySelector(".buttonClass")
const restartButtonClick = document.querySelector(".restartButtonClass")
const gridBox = document.querySelectorAll(".grid-box");
const gridBox_1 = document.querySelectorAll(".row-1");
const gridBox_2 = document.querySelectorAll(".row-2");
const gridBox_3 = document.querySelectorAll(".row-3");
const gridBox_4 = document.querySelectorAll(".column-1");
const gridBox_5 = document.querySelectorAll(".column-2");
const gridBox_6 = document.querySelectorAll(".column-3");
const gridBox_7 = document.querySelectorAll(".diagonal-1");
const gridBox_8 = document.querySelectorAll(".diagonal-2");

let currentSymbol;
var flag = 0;
var signal = false;



function game(askUser) {

    if (askUser.toLowerCase().trim() == "x") {

        currentSymbol = "X";

    }
    else {
        currentSymbol = "O";
    }

    if (askUser.toLowerCase().trim() !== "x" && askUser.toLowerCase().trim() !== "o") {
        alert("Please enter a valid input!");
        return;
    }

    return;


}


gridBox.forEach(element => {

    element.addEventListener("click", () => {
        if (signal) {
            element.textContent == "";
            return;
        }
        if (element.textContent != "") {
            return;
        }
        element.textContent = currentSymbol;
        if (currentSymbol == "X") {
            currentSymbol = "O";
        }
        else {
            currentSymbol = "X";
        }
        flag++;

        if (flag >= 3 || flag >= 6 || flag >= 9) {
            checker();
        }


    });

})




function checker() {

    {

        let arr = [];
        let i = 0;
        gridBox_1.forEach(e1 => {
            arr[i] = e1.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {


        let arr = [];
        let i = 0;
        gridBox_2.forEach(e2 => {
            arr[i] = e2.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {


        let arr = [];
        let i = 0;
        gridBox_3.forEach(e3 => {
            arr[i] = e3.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {


        let arr = [];
        let i = 0;
        gridBox_4.forEach(e4 => {
            arr[i] = e4.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {


        let arr = [];
        let i = 0;
        gridBox_5.forEach(e5 => {
            arr[i] = e5.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {


        let arr = [];
        let i = 0;
        gridBox_6.forEach(e6 => {
            arr[i] = e6.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {


        let arr = [];
        let i = 0;
        gridBox_7.forEach(e7 => {
            arr[i] = e7.textContent.toString();
            i++;

        })

        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
            buttonClick.textContent = `${arr[0]} wins!`;
            signal = true;
            return signal;
        }

    }

    {
        {


            let arr = [];
            let i = 0;
            gridBox_8.forEach(e8 => {
                arr[i] = e8.textContent.toString();
                i++;

            })

            if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] && arr[1] && arr[2]) != "") {
                buttonClick.textContent = `${arr[0]} wins!`; ''
                signal = true;
                return signal;
            }

        }

    }





    return;



}



buttonClick.addEventListener("click", () => {

    start();

})

function start(){
    let askUser = prompt(`Do You Want To Gor For "X" or "O"`);
    game(askUser);
}


restartButtonClick.addEventListener("click", () => {

    signal = false;
    currentSymbol = "";
    flag = 0;
    gridBox.forEach(e => {

        e.textContent = "";

    })

    buttonClick.textContent = "Start";
    start();

})


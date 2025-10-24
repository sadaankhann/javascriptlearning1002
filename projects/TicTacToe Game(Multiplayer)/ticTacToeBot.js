const gameTurnSound = document.querySelector(".turnSound");
const gameEndSound = document.querySelector(".gameEndSound");
const playerValue = document.querySelector(".playerValue");
const computerValue = document.querySelector(".computerValue");
const tieValue = document.querySelector(".tieValue");

let turn_flag = false;
let flag = 0;
const result_button = document.querySelector(".resultText");
const grid_box = document.querySelectorAll(".grid-box")
const grid_1 = document.querySelectorAll(".row-1");
const grid_2 = document.querySelectorAll(".row-2");
const grid_3 = document.querySelectorAll(".row-3");
const grid_4 = document.querySelectorAll(".column-1");
const grid_5 = document.querySelectorAll(".column-2");
const grid_6 = document.querySelectorAll(".column-3");
const grid_7 = document.querySelectorAll(".diagonal-1");
const grid_8 = document.querySelectorAll(".diagonal-2");

const grid = [grid_1, grid_2, grid_3, grid_4, grid_5, grid_6, grid_7, grid_8];


function removeAllClickListeners() {

    grid_box.forEach(e => e.style.pointerEvents = "none");

}

function enableClickListeners() {

    grid_box.forEach(e => e.style.pointerEvents = "auto");

}

async function flicking() {

    let flickInterval;

    clearInterval(flickInterval);

    setTimeout(() => {

        flickInterval = setInterval(() => {

            grid_box.forEach(e => {

                e.classList.toggle("border-none");

            })

        }, 200)

    }, 600)

    setTimeout(() => {
        clearInterval(flickInterval);
        grid_box.forEach(e => e.classList.remove("border-none"));
        reset();
    }, 2600);

    function reset() {
        flag = 0; turn_flag = false;
        grid_box.forEach(e => e.textContent = "");
        enableClickListeners();
    }

}


function checking() {

    let marker = true;

    if (flag >= 9) {

        gameEndSound.play();
        flicking();
        let tieCurrentValue = parseInt(tieValue.textContent);
        tieCurrentValue++;
        tieValue.textContent = tieCurrentValue;
        removeAllClickListeners();
        return turn_flag;
    }

    for (let i = 0; i < grid.length; i++) {

        let arr_2 = [];

        grid[i].forEach(e => {

            arr_2.push(e.textContent);


        })

        if ((arr_2[0] == arr_2[1] && arr_2[1] == arr_2[2]) && (arr_2[0] && arr_2[1] && arr_2[2] != "")) {

            let winner = arr_2[0];
            if (winner == "X") {

                gameEndSound.play();
                flicking();
                let playerCurrentValue = parseInt(playerValue.textContent);
                playerCurrentValue++;
                playerValue.textContent = playerCurrentValue;
                removeAllClickListeners();
                return turn_flag;
            }
            gameEndSound.play();
            flicking();
            let computerCurrentValue = parseInt(computerValue.textContent);
            computerCurrentValue++;
            computerValue.textContent = computerCurrentValue;
            removeAllClickListeners();
            marker = false;
            return turn_flag;

        }


    }

    if (marker) {
        turn_flag = true;
        return turn_flag;
    }

}


function bot(dabba_1) {

    setTimeout(() => {

        const grid = [grid_1, grid_2, grid_3, grid_4, grid_5, grid_6, grid_7, grid_8];
        for (let i = 0; i < grid.length; i++) {

            let xs = 0;
            let os = 0;
            let ss = 0;

            for (let e of grid[i]) {

                if (e.textContent == "X") {
                    xs++;
                }
                else if (e.textContent == "O") {
                    os++;
                }
                else {
                    ss++;
                }
            }

            if ((xs == 2 && ss == 1) || (os == 2 && ss == 1)) {

                for (let e of grid[i]) {

                    if (e.textContent != "") {

                        continue;

                    }

                    else {

                        e.textContent = "O";
                        gameTurnSound.play();
                        e.classList.add("active");
                        flag++;
                        checking();
                        turn_flag = false;
                        return;

                    }


                }

            }


        }


        let checker = false;
        let indexes = 0;

        dabba_1.forEach(e1 => {

            if (checker != true) {

                if (e1.textContent != "") {
                    indexes++;
                    if (indexes === 3) {
                        const arr = [...grid];
                        randomMove(arr);
                    }
                    return;

                }

                e1.textContent = "O";
                gameTurnSound.play();
                e1.classList.add("active");

                checker = true;
                flag++;
                checking();
                turn_flag = false;
                return;

            }


        })

        function randomMove(arr_) {

            if (arr_.length === 0) { return; }

            let check_2 = false;
            let cell_space_checker = 0;


            let random_index = Math.floor(Math.random() * arr_.length);

            if (!check_2) {

                for (let e of arr_[random_index]) {
                    if (e.textContent != "") {
                        cell_space_checker++;
                        continue;
                    }

                    if (cell_space_checker == 3) {
                        arr_.splice(random_index, 1);
                        cell_space_checker = 0;
                        randomMove(arr_);

                    }

                    e.textContent = "O";
                    gameTurnSound.play();
                    e.classList.add("active");
                    check_2 = true;
                    flag++;
                    checking();
                    turn_flag = false;
                    return;

                }

            }

        }

    }, 1000);


}

function userMove(dabba, e) {

    if (turn_flag) { return; }

    if (e.textContent != "") {
        return;
    }

    e.textContent = "X";
    gameTurnSound.play();
    e.classList.add("active");
    flag++;
    let cc = checking();
    if (cc) { bot(dabba) };

}

[grid_1, grid_2, grid_3].forEach(dabba => {
    dabba.forEach(e => {
        e.addEventListener("click", () => { userMove(dabba, e); });
    })
})


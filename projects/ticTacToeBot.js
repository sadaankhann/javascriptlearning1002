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

    grid_box.forEach(e => e.replaceWith(e.cloneNode(true)));

}

function checking() {

    if (flag >= 9) {
        result_button.textContent = "Draw";
        removeAllClickListeners();
    }

    for (let i = 0; i < grid.length; i++) {

        let arr_2 = [];

        grid[i].forEach(e => {

            arr_2.push(e.textContent);


        })

        if ((arr_2[0] == arr_2[1] && arr_2[1] == arr_2[2]) && (arr_2[0] && arr_2[1] && arr_2[2] != "")) {

            result_button.textContent = `${arr_2[0]} wins!`;
            removeAllClickListeners();

        }

    }

}


function bot(turn_flag, dabba_1) {

    setTimeout(() => {

        let marker = true;

        if (turn_flag) {

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

                        if (!marker) {
                            break;
                        }

                        else {

                            e.textContent = "O";
                            marker = false;
                            flag++;
                            checking();

                        }


                    }

                }


            }

        }

        if (marker != true) {

            return;

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
                checker = true;
                flag++;
                checking();
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
                    e.textContent = "O";
                    check_2 = true;
                    flag++;
                    checking();
                    break;
                }

                if (cell_space_checker == 3) {
                    arr_.splice(random_index, 1);
                    cell_space_checker = 0;
                    randomMove(arr_);

                }

            }

        }

    }, 1000);


}


grid_1.forEach(e => {

    e.addEventListener("click", () => {


        if (e.textContent != "") {
            return;
        }

        e.textContent = "X";
        flag++;
        checking();
        turn_flag = true;
        bot(turn_flag, grid_1);



    })

})

grid_2.forEach(e => {

    e.addEventListener("click", () => {

        if (flag >= 9) {
            result_button.textContent = "Draw";
            grid_box.forEach(e => {
                e.addEventListener("click", () => {
                    return;
                })
            })
        }


        if (e.textContent != "") {
            return;
        }

        e.textContent = "X";
        flag++;
        checking();
        turn_flag = true;
        bot(turn_flag, grid_2);



    })

})


grid_3.forEach(e => {

    e.addEventListener("click", () => {


        if (flag >= 9) {
            result_button.textContent = "Draw";
            grid_box.forEach(e => {
                e.addEventListener("click", () => {
                    return;
                })
            })
        }


        if (e.textContent != "") {
            return;
        }

        e.textContent = "X";
        flag++;
        checking();
        turn_flag = true;
        bot(turn_flag, grid_3);



    })

})

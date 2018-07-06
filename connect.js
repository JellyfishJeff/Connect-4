const cells = document.querySelectorAll("button");

const board = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

let currentPlayer = "red";
console.log(currentPlayer);
cells.forEach(cell => {
    cell.addEventListener("click", event => {
        let column;
        if (event.target.id % 6 === 0) {
            column = cell.id / 6;
        } else {
            column = Math.floor(cell.id / 6);
        }


        const index = board[column].length;
        console.log(column * 6 + index);
        console.log(currentPlayer);

        const button = document.getElementById(`${column * 6 + index}`);

        if (board[column].length < 6) {
            button.classList.add(currentPlayer, "checker");

            board[column].push(currentPlayer);
        }
        if (checkVertical(currentPlayer) || checkHorizontal(currentPlayer) || checkDiagonal(currentPlayer)){
            alert (currentPlayer + " wins");
        }
           

        currentPlayer = currentPlayer === "red" ? "black" : "red";

    });
});

function checkVertical(currentPlayer) {

    for (let i = 0; i < board.length; i++) {
        var matches = 0;
        for (let x = 0; x < board[i].length; x++) {
            if (board[i][x] == currentPlayer) {
                matches++;
            } else {
                matches = 0;
            }
            if (matches == 4) {
                return (true);
            }
        }
    }

}

function checkHorizontal(currentPlayer) {

    for (let x = 0; x < 6; x++) {
        var matches = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i][x] == currentPlayer) {
                matches++;
            } else {
                matches = 0;
            }
            if (matches == 4) {
                return (true);
            }
        }
    }

}

function checkDiagonal(currentPlayer){

    for(let r=0; r<4; r++){
        for (let c=0; c<3; c++){
            matches=0;
            for(let s=0; s<4; s++){
                if (board[r+s][c+s] == currentPlayer){
                    matches++;
                }
                if(matches==4){
                    return (true);
                }
            }
        }
    }

    

    









}
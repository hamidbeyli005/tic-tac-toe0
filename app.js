const resetbutton = document.querySelector(".reset");
const errortext = document.getElementById("error");
const boxs = document.querySelectorAll(".box");
const playertext = document.getElementById("player");

let player = "X"
let gameEnd = false;
let winner;

function gameStart() {
    playertext.textContent = `Növbeti gediş ${player} `
    boxs.forEach(box => {
        box.addEventListener("click", () => currentBox(box))
    })
}
function currentBox(box) {
    if (box.textContent === "") {
        box.textContent = player;
        box.style.background = "#e3dac9"

        if(player==="O"){box.style.color="red"}
        changePlayer();
    } else {
        errortext.textContent = "hile yapma..."
        box.style.border = "2px solid red"
        setTimeout(() => {
            errortext.textContent = ""
            box.style.border = ""
        }, 2000);
    }
    checkWin();
    checkEqual();

    if (gameEnd) {
        playertext.textContent = `${winner} qalib oldu `;
        boxs.forEach(box=>box.style.pointerEvents="none")
    }
}
function changePlayer() {
    if (player === "X") {
        player = "O";
        playertext.textContent = `Növbeti gediş ${player} `;
    }
    else if (player === "O") {
        player = "X";
        playertext.textContent = `Növbeti gediş ${player} `;
    }
}
function checkWin() {
    checkRow();
    checkColumns();
    checkDiagonal()
}
function checkEqual(){
const values=[];
boxs.forEach(box=>values.push(box.textContent))

if(!values.includes("")){
    boxs.forEach(box=>box.style.pointerEvents="none")
    playertext.textContent = `oyun berabere`;

}

}
function checkRow() {
    let row1 = boxs[0].textContent == boxs[1].textContent && boxs[0].textContent == boxs[2].textContent && boxs[0].textContent !== ""
    let row2 = boxs[3].textContent == boxs[4].textContent && boxs[3].textContent == boxs[5].textContent && boxs[3].textContent !== ""
    let row3 = boxs[6].textContent == boxs[7].textContent && boxs[6].textContent == boxs[8].textContent && boxs[6].textContent !== ""
    if (row1 || row2 || row3) {
        gameEnd = true
    };
    if (row1) return winner = boxs[0].textContent
    if (row2) return winner = boxs[3].textContent
    if (row3) return winner = boxs[6].textContent
}
function checkColumns() {
    let col1 = boxs[0].textContent == boxs[3].textContent && boxs[0].textContent == boxs[6].textContent && boxs[0].textContent !== ""
    let col2 = boxs[1].textContent == boxs[4].textContent && boxs[1].textContent == boxs[7].textContent && boxs[1].textContent !== ""
    let col3 = boxs[2].textContent == boxs[5].textContent && boxs[2].textContent == boxs[8].textContent && boxs[2].textContent !== ""
    if (col1 || col2 || col3) {
        gameEnd = true
    };
    if (col1) return winner = boxs[0].textContent
    if (col2) return winner = boxs[3].textContent
    if (col3) return winner = boxs[6].textContent
}
function checkDiagonal() {
    let diag1 = boxs[0].textContent == boxs[4].textContent && boxs[0].textContent == boxs[8].textContent && boxs[0].textContent !== ""
    let diag2 = boxs[2].textContent == boxs[4].textContent && boxs[2].textContent == boxs[6].textContent && boxs[2].textContent !== ""
    if (diag1 || diag2) {
        gameEnd = true
    };
    if (diag1) return winner = boxs[0].textContent
    if (diag2) return winner = boxs[2].textContent
}
resetbutton.addEventListener("click", () => resetFunc())
function resetFunc() {
    boxs.forEach(box => {box.textContent="",
    box.style.background = "white"}
    )
}
gameStart()

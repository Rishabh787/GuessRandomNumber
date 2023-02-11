let cutText = document.getElementById("user-name");
let submitButton = document.getElementById("name-button")
let addText = document.getElementById("getting-user-name")
let firstBox = document.getElementById("input-box-container")
let secondBox = document.getElementById("random-number-container")
let checkAction = document.getElementById("name-number-button")
let randomNumber = document.getElementById("user-input")
let userOutput = document.getElementById("after-guess-number")
let allMoves = document.getElementById("moves")
let parachangeText = document.getElementById("para-text")
let nextLine = document.getElementById("third-statement-after-winGame")

let randomNum = Math.floor(Math.random() * 100) + 1
// console.log(randomNum);

secondBox.style.display = "none"
// firstBox.style.display = "none"

submitButton.addEventListener("click", function () {
    let a = cutText.value
    // addText.innerHTML = `<h6>${a}</h6>`
    addText.innerHTML = a
    firstBox.style.display = "none"
    secondBox.style.display = "revert"
})

let countMove = 1;


let move = 3;
let orginMove = 3;
allMoves.innerHTML = `You have only totally ${move} move to win this match`

checkAction.addEventListener("click", function () {
    move--
    
    if (move > 0) {
        allMoves.innerHTML = `You have left only ${move} move to win this match`
        
        let allCountmove = countMove++
        
        let aftercountMove = (orginMove - allCountmove)

        let userGuess = randomNumber.value
        console.log(userGuess);
        if (randomNum > userGuess) {
            userOutput.innerHTML = ("🪲Pls choose Greater than this number");
        } else if (randomNum < userGuess) {
            userOutput.innerHTML = ("🪲Pls choose smaller than this number");

        } else if (randomNum == userGuess) {
            userOutput.innerHTML = ("😍Congrats, You're with me;  haha..😊");
            allMoves.innerHTML = `You won the game in ${allCountmove} move`
            nextLine.innerHTML = `Your award is ${aftercountMove}🤣`
        } else {
            userOutput.innerHTML = ("Nothing here....");
        }
    } else {
        allMoves.innerHTML = `you've 0 moves!`
        // तुम चुटिया  हो .....
        userOutput.innerHTML = "Wasted..😒"

    }
})
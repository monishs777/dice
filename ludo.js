var diceImage = document.querySelector("#diceImage");
var diceNumber = document.querySelector("#diceNumber");

function rollDice() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;

    diceImage.setAttribute("src", "image/dice" + randomNumber + ".png");

    diceNumber.innerHTML = "The Number is " + randomNumber;
}

diceImage.addEventListener("click", rollDice);

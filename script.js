// Player name
var player01 = "Player 01";
var player02 = "Player 02";

// Function to change the player name
function editNames() {
  player01 = prompt("Change Player 01 name");
  player02 = prompt("Change player 02 name");

  document.querySelector("p.Player01").innerHTML = player01;

  document.querySelector("p.Player02").innerHTML = player02;
}

// Function to roll the dice
function rollTheDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document
      .querySelector(".img1")
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")
      .setAttribute("src", "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = player02 + " WINS 😍🏆🥇";
    } else {
      document.querySelector("h1").innerHTML = player01 + " WINS 😍🏆🥇";
    }
  }, 1000);
}

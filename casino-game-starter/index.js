// Ikona zastavice sa primjerom pobjedničkog teksta
// 🚩 Player 1 Wins!

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

var winnerText = document.getElementById("winner");
if (randomNumber1 > randomNumber2) {
  winnerText.innerHTML = 'Player 1 Wins! <span class="flag">🚩</span>';
} else if (randomNumber2 > randomNumber1) {
  winnerText.innerHTML = 'Player 2 Wins! <span class="flag">🚩</span>';
} else {
  winnerText.innerHTML = 'Draw! <span class="flag">🤝</span>';
}
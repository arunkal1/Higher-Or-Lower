document.addEventListener("DOMContentLoaded", function(){

// Generates the start button:
var buttonGen = document.getElementById("buttongen");
buttonGen.addEventListener("click", genRandomCard);

buttonGen.hidden = false;

// Creates an Array to store the cards:
var card = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var secondCard = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var random;
var random2;
var lives = 3;
document.getElementById('lives').innerHTML = lives;
var score = 0;
document.getElementById('score').innerHTML = score;

// Assigns element in array to that of the random number:
function genRandomCard() {

  random = Math.ceil(Math.random()*13);

  switch (random) {
    case 1:
      card[0];
      console.log("You have got an ace");
      console.log(random);
      break;
    case 2:
      card[1];
      console.log("You have got 2");
      console.log(random);
      break;
    case 3:
      card[2];
      console.log("You have got 3");
      console.log(random);
      break;
    case 4:
      card[3];
      console.log("You have got 4");
      console.log(random);
      break;
    case 5:
      card[4];
      console.log("You have got 5");
      console.log(random);
      break;
    case 6:
      card[5];
      console.log("You have got 6");
      console.log(random);
      break;
    case 7:
      card[6];
      console.log("You have got 7");
      console.log(random);
      break;
    case 8:
      card[7];
      console.log("You have got 8");
      console.log(random);
      break;
    case 9:
      card[8];
      console.log("You have got 9");
      console.log(random);
      break;
    case 10:
      card[9];
      console.log("You have got 10");
      console.log(random);
      break;
    case 11:
      card[10];
      console.log("You have got a Jack");
      console.log(random);
      break;
    case 12:
      card[11];
      console.log("You have got a Queen");
      console.log(random);
      break;
    case 13:
      card[12];
      console.log("You have got a King");
      console.log(random);
      break;
    default:
      console.log("Thats Not Meant to Happen")
  }

  genSecondCard();
}

// Assigns element in array to that of the random number:
function genSecondCard() {

  random2 = Math.ceil(Math.random()*13);

  switch (random2) {
    case 1:
      secondCard[0];
      addImageAce();
      console.log("You have got an ace");
      console.log(random2);
      break;
    case 2:
      secondCard[1];
      addImage2();
      console.log("You have got 2");
      console.log(random2);
      break;
    case 3:
      secondCard[2];
      addImage3();
      console.log("You have got 3");
      console.log(random2);
      break;
    case 4:
      secondCard[3];
      addImage4();
      console.log("You have got 4");
      console.log(random2);
      break;
    case 5:
      secondCard[4];
      addImage5();
      console.log("You have got 5");
      console.log(random2);
      break;
    case 6:
      secondCard[5];
      addImage6();
      console.log("You have got 6");
      console.log(random2);
      break;
    case 7:
      secondCard[6];
      addImage7();
      console.log("You have got 7");
      console.log(random2);
      break;
    case 8:
      secondCard[7];
      addImage8();
      console.log("You have got 8");
      console.log(random2);
      break;
    case 9:
      secondCard[8];
      addImage9();
      console.log("You have got 9");
      console.log(random2);
      break;
    case 10:
      secondCard[9];
      addImage10();
      console.log("You have got 10");
      console.log(random2);
      break;
    case 11:
      secondCard[10];
      addImageJack();
      console.log("You have got a Jack");
      console.log(random2);
      break;
    case 12:
      secondCard[11];
      addImageQueen();
      console.log("You have got a Queen");
      console.log(random2);
      break;
    case 13:
      secondCard[12];
      addImageKing();
      console.log("You have got a King");
      console.log(random2);
      break;
    default:
    console.log("Thats Not Meant to Happen")
  }

  console.log("Random: " + random);
  console.log("Random2: " + random2);

  compare(random2, random);

  var initialAudio = new Audio('assets/dealingCards.mp3');
  initialAudio.play();
}

// Compares the two random numbers to determine which is higher or lower
function compare(num1, num2){
  if (random2 > random) {
    console.log('Its higher');
  } else if (random2 < random) {
    console.log('Its lower');
  } else if (random2 == random) {
    console.log('Its the same');
  }
}

var higher = document.getElementById("higherbtn");
higher.addEventListener("click", higherNumber);

var lower = document.getElementById("lowerbtn");
lower.addEventListener("click", lowerNumber);

// If the higher button is pressed:
function higherNumber() {

  moveCard();
  genSecondCard();

  if (random2 > random) {
    console.log("1 Point");
    score = score + 1;
    document.getElementById('score').innerHTML = score;
    var scoreAnimation = document.getElementById("score");
    scoreAnimation.classList.add("score");
      setTimeout(function() {
        scoreAnimation.classList.remove("score");
      }, 1000);
  } else if (random2 == random) {
    console.log("Same Card");
  } else if (random2 < random){
    console.log("You lose a life");
    lives = lives - 1;
    document.getElementById('lives').innerHTML = lives;
    console.log("Your Lives are " + lives);
    var element = document.getElementById("lives");
    element.classList.add("lives");
      setTimeout(function() {
        element.classList.remove("lives");
      }, 1000);
  }
  if (lives <= 0) {
    resetGame();
  }
}

// If the lower button is pressed:
function lowerNumber() {

  moveCard();
  genSecondCard();

  if (random2 < random) {
    console.log("1 Point");
    score = score + 1;
    document.getElementById('score').innerHTML = score;
    var scoreAnimation = document.getElementById("score");
    scoreAnimation.classList.add("score");
      setTimeout(function() {
        scoreAnimation.classList.remove("score");
      }, 3000);
  } else if (random2 == random) {
    console.log("Same Card");
  } else if (random2 > random){
    console.log("You lose a life");
    lives = lives - 1;
    document.getElementById('lives').innerHTML = lives;
    console.log("Your Lives are " + lives);
    var element = document.getElementById("lives");
    element.classList.add("lives");
      setTimeout(function() {
        element.classList.remove("lives");
      }, 3000);
  }
  if (lives <= 0) {
    resetGame();
  }
}

// Moves new card to the right deck and old card to the left deck- Audio of dealing cards:
function moveCard() {

  var audio = new Audio('assets/dealingCards.mp3');
  audio.play();

  buttonGen.hidden = true;

  random = random2;

  var oldParent = document.getElementById('cardNumber2');
  var newParent = document.getElementById('cardNumber');
  newParent.innerHTML = oldParent.innerHTML;
  oldParent.innerHTML = '';
}

// Reset game once all the lives have run out:
function resetGame() {

  var gameOver = new Audio('assets/gameOver.mp3');
  gameOver.play();

    var x = document.getElementById("main-content") ;
    x.style.display = "none";
    bringBackContent();
}

var bringBack = document.getElementById("bringback");
bringBack.addEventListener("click", bringBackContent);

bringBack.hidden = true;

var bringBack2 = document.getElementById("info-content");

bringBack2.hidden = false;

var livesFinished = document.getElementById("livesOut");

livesFinished.hidden = true;

// Hidden items which display once lives out are brought back to be visible
function bringBackContent() {
  bringBack2.hidden = true;
  bringBack.hidden = false;
  livesFinished.hidden = false;
  bringBack.addEventListener("click", function(){
    window.location.reload(false)
  });
}

// Images:

function addImageKing() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "assets/king.png");
  x.setAttribute("width", "242");
  x.setAttribute("height", "336");
  x.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(x);
}

function addImageQueen() {
  var q = document.createElement("IMG");
  q.setAttribute("src", "assets/queen.png");
  q.setAttribute("width", "242");
  q.setAttribute("height", "336");
  q.setAttribute("alt", "Queen");
  document.getElementById("cardNumber2").appendChild(q);
}

function addImageJack() {
  var j = document.createElement("IMG");
  j.setAttribute("src", "assets/jack.png");
  j.setAttribute("width", "242");
  j.setAttribute("height", "336");
  j.setAttribute("alt", "Jack");
  document.getElementById("cardNumber2").appendChild(j);
}

function addImageAce() {
  var a = document.createElement("IMG");
  a.setAttribute("src", "assets/ace.svg");
  a.setAttribute("width", "242");
  a.setAttribute("height", "336");
  a.setAttribute("alt", "Ace");
  document.getElementById("cardNumber2").appendChild(a);
}

function addImage2() {
  var two = document.createElement("IMG");
  two.setAttribute("src", "assets/2.svg");
  two.setAttribute("width", "242");
  two.setAttribute("height", "336");
  two.setAttribute("alt", "2");
  document.getElementById("cardNumber2").appendChild(two);
}

function addImage3() {
  var three = document.createElement("IMG");
  three.setAttribute("src", "assets/3.svg");
  three.setAttribute("width", "242");
  three.setAttribute("height", "336");
  three.setAttribute("alt", "3");
  document.getElementById("cardNumber2").appendChild(three);
}

function addImage4() {
  var four = document.createElement("IMG");
  four.setAttribute("src", "assets/4.png");
  four.setAttribute("width", "242");
  four.setAttribute("height", "336");
  four.setAttribute("alt", "4");
  document.getElementById("cardNumber2").appendChild(four);
}

function addImage5() {
  var five = document.createElement("IMG");
  five.setAttribute("src", "assets/5.png");
  five.setAttribute("width", "242");
  five.setAttribute("height", "336");
  five.setAttribute("alt", "5");
  document.getElementById("cardNumber2").appendChild(five);
}

function addImage6() {
  var six = document.createElement("IMG");
  six.setAttribute("src", "assets/6.png");
  six.setAttribute("width", "242");
  six.setAttribute("height", "336");
  six.setAttribute("alt", "6");
  document.getElementById("cardNumber2").appendChild(six);
}

function addImage7() {
  var seven = document.createElement("IMG");
  seven.setAttribute("src", "assets/7.png");
  seven.setAttribute("width", "242");
  seven.setAttribute("height", "336");
  seven.setAttribute("alt", "7");
  document.getElementById("cardNumber2").appendChild(seven);
}

function addImage8() {
  var eight = document.createElement("IMG");
  eight.setAttribute("src", "assets/8.svg");
  eight.setAttribute("width", "242");
  eight.setAttribute("height", "336");
  eight.setAttribute("alt", "8");
  document.getElementById("cardNumber2").appendChild(eight);
}

function addImage9() {
  var nine = document.createElement("IMG");
  nine.setAttribute("src", "assets/9.png");
  nine.setAttribute("width", "242");
  nine.setAttribute("height", "336");
  nine.setAttribute("alt", "9");
  document.getElementById("cardNumber2").appendChild(nine);
}

function addImage10() {
  var ten = document.createElement("IMG");
  ten.setAttribute("src", "assets/10.png");
  ten.setAttribute("width", "242");
  ten.setAttribute("height", "336");
  ten.setAttribute("alt", "10");
  document.getElementById("cardNumber2").appendChild(ten);
}

});

document.addEventListener("DOMContentLoaded", function(){

var buttonGen = document.getElementById("buttongen");
buttonGen.addEventListener("click", genRandomCard);

buttonGen.hidden = false;

// var buttonGen2 = document.getElementById("buttongen2");
// buttonGen2.addEventListener("click", genSecondCard);

var card = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var secondCard = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var random;
var random2;
var lives = 3;
document.getElementById('lives').innerHTML = lives;
var score = 0;
document.getElementById('score').innerHTML = score;

function genRandomCard() {

  random = Math.ceil(Math.random()*13);

  switch (random) {
    case 1:
      card[0];
      document.getElementById("cardNumber").innerHTML = "Ace";
      console.log("You have got an ace");
      console.log(random);
      break;
    case 2:
      card[1];
      document.getElementById("cardNumber").innerHTML = "2";
      console.log("You have got 2");
      console.log(random);
      break;
    case 3:
      card[2];
      document.getElementById("cardNumber").innerHTML = "3";
      console.log("You have got 3");
      console.log(random);
      break;
    case 4:
      card[3];
      document.getElementById("cardNumber").innerHTML = "4";
      console.log("You have got 4");
      console.log(random);
      break;
    case 5:
      card[4];
      document.getElementById("cardNumber").innerHTML = "5";
      console.log("You have got 5");
      console.log(random);
      break;
    case 6:
      card[5];
      document.getElementById("cardNumber").innerHTML = "6";
      console.log("You have got 6");
      console.log(random);
      break;
    case 7:
      card[6];
      document.getElementById("cardNumber").innerHTML = "7";
      console.log("You have got 7");
      console.log(random);
      break;
    case 8:
      card[7];
      document.getElementById("cardNumber").innerHTML = "8";
      console.log("You have got 8");
      console.log(random);
      break;
    case 9:
      card[8];
      document.getElementById("cardNumber").innerHTML = "9";
      console.log("You have got 9");
      console.log(random);
      break;
    case 10:
      card[9];
      document.getElementById("cardNumber").innerHTML = "10";
      console.log("You have got 10");
      console.log(random);
      break;
    case 11:
      card[10];
      document.getElementById("cardNumber").innerHTML = "Joker";
      console.log("You have got a Jack");
      console.log(random);
      break;
    case 12:
      card[11];
      document.getElementById("cardNumber").innerHTML = "Queen";
      console.log("You have got a Queen");
      console.log(random);
      break;
    case 13:
      card[12];
      document.getElementById("cardNumber").innerHTML = "King";
      // addImageKing();
      console.log("You have got a King");
      console.log(random);
      break;
    default:
      console.log("Thats Not Meant to Happen")
  }

  genSecondCard();
}

// genRandomCard();

function genSecondCard() {

  // document.getElementsByClassName('card2')[0].style.visibility = 'hidden';

  random2 = Math.ceil(Math.random()*13);

  switch (random2) {
    case 1:
      secondCard[0];
      // document.getElementById("cardNumber2").innerHTML = "Ace";
      addImageAce();
      console.log("You have got an ace");
      console.log(random2);
      break;
    case 2:
      secondCard[1];
      // document.getElementById("cardNumber2").innerHTML = "2";
      addImage2();
      console.log("You have got 2");
      console.log(random2);
      break;
    case 3:
      secondCard[2];
      // document.getElementById("cardNumber2").innerHTML = "3";
      addImage3();
      console.log("You have got 3");
      console.log(random2);
      break;
    case 4:
      secondCard[3];
      // document.getElementById("cardNumber2").innerHTML = "4";
      addImage4();
      console.log("You have got 4");
      console.log(random2);
      break;
    case 5:
      secondCard[4];
      // document.getElementById("cardNumber2").innerHTML = "5";
      addImage5();
      console.log("You have got 5");
      console.log(random2);
      break;
    case 6:
      secondCard[5];
      // document.getElementById("cardNumber2").innerHTML = "6";
      addImage6();
      console.log("You have got 6");
      console.log(random2);
      break;
    case 7:
      secondCard[6];
      // document.getElementById("cardNumber2").innerHTML = "7";
      addImage7();
      console.log("You have got 7");
      console.log(random2);
      break;
    case 8:
      secondCard[7];
      // document.getElementById("cardNumber2").innerHTML = "8";
      addImage8();
      console.log("You have got 8");
      console.log(random2);
      break;
    case 9:
      secondCard[8];
      // document.getElementById("cardNumber2").innerHTML = "9";
      addImage9();
      console.log("You have got 9");
      console.log(random2);
      break;
    case 10:
      secondCard[9];
      // document.getElementById("cardNumber2").innerHTML = "10";
      addImage10();
      console.log("You have got 10");
      console.log(random2);
      break;
    case 11:
      secondCard[10];
      // document.getElementById("cardNumber2").innerHTML = "Joker";
      addImageJack();
      console.log("You have got a Jack");
      console.log(random2);
      break;
    case 12:
      secondCard[11];
      // document.getElementById("cardNumber2").innerHTML = "Queen";
      addImageQueen();
      console.log("You have got a Queen");
      console.log(random2);
      break;
    case 13:
      secondCard[12];
      // document.getElementById("cardNumber2").innerHTML = "King";
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


}

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


function higherNumber() {

  moveCard();
  genSecondCard();

  if (random2 > random) {
    console.log("1 Point");
    score = score + 1;
    document.getElementById('score').innerHTML = score;
  } else if (random2 == random) {
    console.log("Same Card");
  } else if (random2 < random){
    console.log("You lose a life");
    lives = lives - 1;
    document.getElementById('lives').innerHTML = lives;
    console.log("Your Lives are " + lives);
  }
  if (lives <= 0) {
    alert("Your lives are out");
    resetGame();
  }
}


function lowerNumber() {

  moveCard();
  genSecondCard();

  if (random2 < random) {
    console.log("1 Point");
    score = score + 1;
    document.getElementById('score').innerHTML = score;
  } else if (random2 == random) {
    console.log("Same Card");
  } else if (random2 > random){
    console.log("You lose a life");
    lives = lives - 1;
    document.getElementById('lives').innerHTML = lives;
    console.log("Your Lives are " + lives);
  }
  if (lives <= 0) {
    alert("Your lives are out");
    resetGame();
  }
}

function moveCard() {

  buttonGen.hidden = true;

  random = random2;

  var oldParent = document.getElementById('cardNumber2');
  var newParent = document.getElementById('cardNumber');
  newParent.innerHTML = oldParent.innerHTML;
  oldParent.innerHTML = '';
}

function resetGame() {
  var restart = prompt("Would you like to play again: (1)Yes or (2)No... Your Score was " + score);

  while (restart != "1" && restart != "2") {
    restart = prompt("Invalid Selection: Would you like to play again: (1)Yes or (2) No");
  }

  if (restart == 1) {
    window.location.reload(false);
  } else if (restart == 2) {
    var x = document.getElementById("main-content") ;
    x.style.display = "none";
    bringBackContent();
  }
}

var bringBack = document.getElementById("bringback");
bringBack.addEventListener("click", bringBackContent);

bringBack.hidden = true;

function bringBackContent() {
  bringBack.hidden = false;
  bringBack.addEventListener("click", function(){
    window.location.reload(false)
  }); 
}

// Images:

function addImageKing() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "king.png");
  x.setAttribute("width", "242");
  x.setAttribute("height", "336");
  x.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(x);
}

function addImageQueen() {
  var q = document.createElement("IMG");
  q.setAttribute("src", "queen.png");
  q.setAttribute("width", "242");
  q.setAttribute("height", "336");
  q.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(q);
}

function addImageJack() {
  var j = document.createElement("IMG");
  j.setAttribute("src", "jack.png");
  j.setAttribute("width", "242");
  j.setAttribute("height", "336");
  j.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(j);
}

function addImageAce() {
  var a = document.createElement("IMG");
  a.setAttribute("src", "ace.svg");
  a.setAttribute("width", "242");
  a.setAttribute("height", "336");
  a.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(a);
}

function addImage2() {
  var two = document.createElement("IMG");
  two.setAttribute("src", "2.svg");
  two.setAttribute("width", "242");
  two.setAttribute("height", "336");
  two.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(two);
}

function addImage3() {
  var three = document.createElement("IMG");
  three.setAttribute("src", "3.svg");
  three.setAttribute("width", "242");
  three.setAttribute("height", "336");
  three.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(three);
}

function addImage4() {
  var four = document.createElement("IMG");
  four.setAttribute("src", "4.png");
  four.setAttribute("width", "242");
  four.setAttribute("height", "336");
  four.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(four);
}

function addImage5() {
  var five = document.createElement("IMG");
  five.setAttribute("src", "5.png");
  five.setAttribute("width", "242");
  five.setAttribute("height", "336");
  five.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(five);
}

function addImage6() {
  var six = document.createElement("IMG");
  six.setAttribute("src", "6.png");
  six.setAttribute("width", "242");
  six.setAttribute("height", "336");
  six.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(six);
}

function addImage7() {
  var seven = document.createElement("IMG");
  seven.setAttribute("src", "7.png");
  seven.setAttribute("width", "242");
  seven.setAttribute("height", "336");
  seven.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(seven);
}

function addImage8() {
  var eight = document.createElement("IMG");
  eight.setAttribute("src", "8.svg");
  eight.setAttribute("width", "242");
  eight.setAttribute("height", "336");
  eight.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(eight);
}

function addImage9() {
  var nine = document.createElement("IMG");
  nine.setAttribute("src", "9.png");
  nine.setAttribute("width", "242");
  nine.setAttribute("height", "336");
  nine.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(nine);
}

function addImage10() {
  var ten = document.createElement("IMG");
  ten.setAttribute("src", "10.png");
  ten.setAttribute("width", "242");
  ten.setAttribute("height", "336");
  ten.setAttribute("alt", "King");
  document.getElementById("cardNumber2").appendChild(ten);
}


});

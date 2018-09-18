document.addEventListener("DOMContentLoaded", function(){

var buttonGen = document.getElementById("buttongen");
buttonGen.addEventListener("click", genRandomCard);

// var buttonGen2 = document.getElementById("buttongen2");
// buttonGen2.addEventListener("click", genSecondCard);

var card = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var secondCard = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var random;
var random2;

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
      console.log("You have got a Joker");
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


  random2 = Math.ceil(Math.random()*13);

  switch (random2) {
    case 1:
      secondCard[0];
      document.getElementById("cardNumber2").innerHTML = "Ace";
      console.log("You have got an ace");
      console.log(random2);
      break;
    case 2:
      secondCard[1];
      document.getElementById("cardNumber2").innerHTML = "2";
      console.log("You have got 2");
      console.log(random2);
      break;
    case 3:
      secondCard[2];
      document.getElementById("cardNumber2").innerHTML = "3";
      console.log("You have got 3");
      console.log(random2);
      break;
    case 4:
      secondCard[3];
      document.getElementById("cardNumber2").innerHTML = "4";
      console.log("You have got 4");
      console.log(random2);
      break;
    case 5:
      secondCard[4];
      document.getElementById("cardNumber2").innerHTML = "5";
      console.log("You have got 5");
      console.log(random2);
      break;
    case 6:
      secondCard[5];
      document.getElementById("cardNumber2").innerHTML = "6";
      console.log("You have got 6");
      console.log(random2);
      break;
    case 7:
      secondCard[6];
      document.getElementById("cardNumber2").innerHTML = "7";
      console.log("You have got 7");
      console.log(random2);
      break;
    case 8:
      secondCard[7];
      document.getElementById("cardNumber2").innerHTML = "8";
      console.log("You have got 8");
      console.log(random2);
      break;
    case 9:
      secondCard[8];
      document.getElementById("cardNumber2").innerHTML = "9";
      console.log("You have got 9");
      console.log(random2);
      break;
    case 10:
      secondCard[9];
      document.getElementById("cardNumber2").innerHTML = "10";
      console.log("You have got 10");
      console.log(random2);
      break;
    case 11:
      secondCard[10];
      document.getElementById("cardNumber2").innerHTML = "Joker";
      console.log("You have got a Joker");
      console.log(random2);
      break;
    case 12:
      secondCard[11];
      document.getElementById("cardNumber2").innerHTML = "Queen";
      console.log("You have got a Queen");
      console.log(random2);
      break;
    case 13:
      secondCard[12];
      document.getElementById("cardNumber2").innerHTML = "King";
      console.log("You have got a King");
      console.log(random2);
      break;
    default:
    console.log("Thats Not Meant to Happen")
  }

  compare(random, random2);


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

  if (random2 > random) {
    console.log("1 Point");
  } else if (random2 == random) {
    console.log("Same Card");
  } else if (random2 < random){
    console.log("You lose a life");
  }

}

function lowerNumber() {
  if (random2 < random) {
    console.log("1 Point");
  } else if (random2 == random) {
    console.log("Same Card");
  } else if (random2 > random){
    console.log("You lose a life");
  }
}



});

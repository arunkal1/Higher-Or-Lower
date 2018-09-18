$(document).ready(function(){

var card = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");

var secondCard = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K");


  var random = Math.ceil(Math.random()*13);

  switch (random) {
    case 1:
      card[0];
      document.write("You have got an ace");
      console.log(random);
      break;
    case 2:
      card[1];
      document.write("You have got 2");
      console.log(random);
      break;
    case 3:
      card[2];
      document.write("You have got 3");
      console.log(random);
      break;
    case 4:
      card[3];
      document.write("You have got 4");
      console.log(random);
      break;
    case 5:
      card[4];
      document.write("You have got 5");
      console.log(random);
      break;
    case 6:
      card[5];
      document.write("You have got 6");
      console.log(random);
      break;
    case 7:
      card[6];
      document.write("You have got 7");
      console.log(random);
      break;
    case 8:
      card[7];
      document.write("You have got 8");
      console.log(random);
      break;
    case 9:
      card[8];
      document.write("You have got 9");
      console.log(random);
      break;
    case 10:
      card[9];
      document.write("You have got 10");
      console.log(random);
      break;
    case 11:
      card[10];
      document.write("You have got a Joker");
      console.log(random);
      break;
    case 12:
      card[11];
      document.write("You have got a Queen");
      console.log(random);
      break;
    case 13:
      card[12];
      document.write("You have got a King");
      console.log(random);
      break;
    default:
      document.write("Thats Not Meant to Happed")
  }


var random2 = Math.ceil(Math.random()*13);

switch (random2) {
  case 1:
    secondCard[0];
    document.write("You have got an ace");
    console.log(random2);
    break;
  case 2:
    secondCard[1];
    document.write("You have got 2");
    console.log(random2);
    break;
  case 3:
    secondCard[2];
    document.write("You have got 3");
    console.log(random2);
    break;
  case 4:
    secondCard[3];
    document.write("You have got 4");
    console.log(random2);
    break;
  case 5:
    secondCard[4];
    document.write("You have got 5");
    console.log(random2);
    break;
  case 6:
    secondCard[5];
    document.write("You have got 6");
    console.log(random2);
    break;
  case 7:
    secondCard[6];
    document.write("You have got 7");
    console.log(random2);
    break;
  case 8:
    secondCard[7];
    document.write("You have got 8");
    console.log(random2);
    break;
  case 9:
    secondCard[8];
    document.write("You have got 9");
    console.log(random2);
    break;
  case 10:
    secondCard[9];
    document.write("You have got 10");
    console.log(random2);
    break;
  case 11:
    secondCard[10];
    document.write("You have got a Joker");
    console.log(random2);
    break;
  case 12:
    secondCard[11];
    document.write("You have got a Queen");
    console.log(random2);
    break;
  case 13:
    secondCard[12];
    document.write("You have got a King");
    console.log(random2);
    break;
  default:
  document.write("Thats Not Meant to Happed")
}


console.log(card + " : " + secondCard);

if (random2 > random) {
  document.write('Its higher');
} else if (random2 < random) {
  document.write('Its lower');
} else if (random2 == random) {
  document.write('Its the same');
}



});

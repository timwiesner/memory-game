var container = $('.container');
var squares = $('.square');


var bus = $('<i class="fa fa-ambulance" aria-hidden="true"></i>');
var plane = $('<i class="fa fa-plane" aria-hidden="true"></i>');
var bitcoin = $('<i class="fa fa-btc" aria-hidden="true"></i>');
var sissors = $('<i class="fa fa-scissors" aria-hidden="true"></i>');
var piper = $('<i class="fa fa-pied-piper-alt" aria-hidden="true"></i>');
var space = $('<i class="fa fa-space-shuttle" aria-hidden="true"></i>');
var cutlery = $('<i class="fa fa-cutlery" aria-hidden="true"></i>');
var camera = $('<i class="fa fa-camera-retro" aria-hidden="true"></i>');

var bus2 = $('<i class="fa fa-ambulance" aria-hidden="true"></i>');
var plane2 = $('<i class="fa fa-plane" aria-hidden="true"></i>');
var bitcoin2 = $('<i class="fa fa-btc" aria-hidden="true"></i>');
var sissors2 = $('<i class="fa fa-scissors" aria-hidden="true"></i>');
var piper2 = $('<i class="fa fa-pied-piper-alt" aria-hidden="true"></i>');
var space2 = $('<i class="fa fa-space-shuttle" aria-hidden="true"></i>');
var cutlery2 = $('<i class="fa fa-cutlery" aria-hidden="true"></i>');
var camera2 = $('<i class="fa fa-camera-retro" aria-hidden="true"></i>');


var icons = [bus, plane, bitcoin, sissors, piper, space, cutlery, camera, bus2, plane2, bitcoin2, sissors2, piper2, space2, cutlery2, camera2];



shuffle(icons);
fillSquares(icons);

var clickedOne, clickedTwo;

squares.click(function(){
  // check to see if clickedOne is undefined
  if (clickedOne === undefined) {
    // if yes, clickedOne = child i of square with class 'show'
    clickedOne = $(this).children().addClass('show');
    // access clickedOne object, set answer = specific class
    answerOne = $(clickedOne)['0'].classList[1];
  } else {
    // else place clicked in clickedTwo
    clickedTwo = $(this).children().addClass('show');
    // set answer to specific class
    answerTwo = $(clickedTwo)['0'].classList[1];

    // if classes are =
    if (answerOne === answerTwo) {
      console.log('Success');
      clickedOne = undefined;
      clickedTwo = undefined;
    } else {
      console.log('Fuck you');
      clickedOne.removeClass('show');
      // setTimeout(function(){
      //   squares.children().toggleClass('show');
      // }, 500);
    }
  }
});



function shuffle(arr){
  // Takes 'icons' array as inputs using the Fisher-Yates Shuffle
  var rando, temp;
  for (var i = arr.length; i > 0; i--) {
    rando = Math.floor(Math.random() * i);
    temp = arr[i - 1];
    arr[i - 1] = arr[rando];
    arr[rando] = temp;
  }
}

function fillSquares(arr) {
  // Takes shuffled 'icons' array and places them in divs
	squares.each(function(i) {
		$(this).append(arr[i]);
	});
}


// Make square divs with js
// for (var i = 0; i < icons.length; i++){
//   $('.container').append('<div class="square"></div>');
// }




var container = $('.container');
var squares = $('.square');
var icon = $('.square i');

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
var answers = [];

var clickedOne = undefined;
var clickedTwo = undefined;


shuffle(icons);
fillSquares(icons);


squares.click(function(){
  // Shows icon when square is clicked
  $(this).children().toggleClass('show');
  if (clickedOne === undefined){
    clickedOne = $('.show')[0];
  } else {
    clickedTwo = $('.show')[1];
    answers.push(clickedOne, clickedTwo);
    console.log(answers[0]);
    console.log(answers[1]);
    checkAnswers(answers);
  }
});

function checkAnswers(answers) {
  if ($(answers[0]) === $(answers[1])){
    console.log('Match!!!');
  } else {
    console.log('No Dice');
    // $('.square i').removeClass('show');
  }
}



function shuffle(arr) {
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




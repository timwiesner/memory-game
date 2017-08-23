var squares = $('.square');
var restart = $('.fa-refresh');

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
  // targets child element of clicked square
  var child = $(this).children();
  // determine if icon is already shown
  if (!child.hasClass('show')){
    // check to see if clickedOne is undefined 
    if (clickedOne === undefined) {
      // if yes, clickedOne = child i of square with class 'show'
      clickedOne = child.addClass('show');
      // access clickedOne object, set answer = specific class
      answerOne = $(clickedOne)['0'].classList[1];
    } else {
      // else place clicked in clickedTwo
      clickedTwo = child.addClass('show');
      // set answer to specific class
      answerTwo = $(clickedTwo)['0'].classList[1];
      // use checkAnswers to determine if match
      checkAnswers(answerOne, answerTwo);
    }
  } else {
    // call to reset clickedOne
    misClick();
  }
});

restart.click(function(){
  $('.square i').removeClass('show');
  clickedOne = undefined;
  clickedTwo = undefined;
  shuffle(icons);
  fillSquares(icons);
});

function checkAnswers(answerOne, answerTwo){
  if (answerOne === answerTwo) {
    // return clickedOne and clickedTwo to undefined state
    clickedOne = undefined;
    clickedTwo = undefined;
  } else {
    // if not =, fade away icons
    setTimeout(function(){
      // remove .show from clickedOne and clickedTwo
      clickedOne.removeClass('show');
      clickedTwo.removeClass('show');
      // return to undefined state after .show is removed
      clickedOne = undefined;
      clickedTwo = undefined;
    }, 500);
  }
}

function misClick(){
  alert('Please click a blank square');
  setTimeout(function(){
    // remove .show from clickedOne
    clickedOne.removeClass('show');
    // return to undefined state after .show is removed
    clickedOne = undefined;
  }, 500);
}


function shuffle(arr){
  // Takes 'icons' array as inputs using the Fisher-Yates Shuffle
  // Starter code obtained from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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






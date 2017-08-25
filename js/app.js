var squares = $('.square');
var restart = $('.fa-refresh');
var play = $('.fa-play');
var time = $('#timer');
var star = $('.fa-star');

// var displayStar = $('<i class="fa fa-star"></i>');


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

var moves = 0;
var score = 0;
var clickedOne, clickedTwo;


// shows icon upon click event
squares.click(function(){
  clickCounter();
  // determine if icon is already shown
  if (!$(this).children().hasClass('show')){
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
      // use checkAnswers to determine if match
      checkAnswers(answerOne, answerTwo);
    }
  } else {
    misClick();
  }
});

// define start outside of function so clearInterval can be called
var start;
// starts timer when first square is clicked
squares.one('click', function(){
  // begins on first clicked square
  if (moves === 1){
    // set timer = new Date
    var timer = new Date;
    // set interval counter
    start = setInterval(function(){
      // select timer html, update + 1 second
      $('#timer').html(Math.floor((new Date - timer) / 1000) + " seconds");
    }, 1000);
  }
});

// counts total number of moves
function clickCounter(){
  moves++;
  $('.moves').html(moves);
  if (moves > 4 && moves < 8){
    $('.one').detach();
  } else if (moves > 8){
    $('.two').detach();
  }
}

//keeps track of total score
function trackScore(){
  // adds one point to score--one for each match
  score++;
  // initiates upon eight matches
  if (score > 7){
    setTimeout(function(){
      alert("Congratulations!\nYou won the game in " + time.html() + 
        " seconds using " + moves + " moves with a score of " +
        stars.html());
    }, 1000);
    // stop timer
    clearInterval(start);
  }
}

// restart button handler and logic
restart.click(function(){
  // remove 'show' class from all squares
  $('.square i').removeClass('show');
  // undefine both clickedOne and clickedTwo
  clickedOne = undefined;
  clickedTwo = undefined;
  // reset moves and score to 0
  moves = 0;
  score = 0;
  // reset timer
  $('#timer').html('0 seconds');
  // then, reset interval 
  clearInterval(start);
  // update 'moves' and 'stars' html
  $('.moves').html('0');
  $('#stars').html('***');
  // reshuffle icons, then fill squares
  shuffle(icons);
  fillSquares(icons);
});

// checks answer one against answer two to look for match
function checkAnswers(answerOne, answerTwo){
  if (answerOne === answerTwo) {
    // return clickedOne and clickedTwo to undefined state
    clickedOne = undefined;
    clickedTwo = undefined;
    trackScore();
  } else {
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

// is called if player moves on the same square twice
function misClick(){
  alert('Please click a blank square');
  setTimeout(function(){
    // remove .show from clickedOne
    clickedOne.removeClass('show');
    // return to undefined state after .show is removed
    clickedOne = undefined;
  }, 500);
}

// Takes 'icons' array as inputs using the Fisher-Yates Shuffle
function shuffle(arr){
  // Starter code obtained from https://stackoverflow.com/a/2450954/
  var randomIndex, temporaryValue;
  for (var i = arr.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    temporaryValue = arr[i - 1];
    arr[i - 1] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
}

// fills squares with appropriate shuffled icons
function fillSquares(arr) {
  // loops through each square
  squares.each(function(i) {
    // places shuffled icons in squares
    $(this).append(arr[i]);
  });
}
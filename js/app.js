// Javascript Document

// Define jQuery DOM variables
var $squares = $('.square');
var $restart = $('.fa-refresh');
var $time = $('.timer');
var $star = $('.fa-star');

// Define FontAwesome icons to be used for icons array
var bus = $('<i class="fa fa-ambulance" aria-hidden="true"></i>');
var plane = $('<i class="fa fa-plane" aria-hidden="true"></i>');
var bitcoin = $('<i class="fa fa-btc" aria-hidden="true"></i>');
var sissors = $('<i class="fa fa-scissors" aria-hidden="true"></i>');
var piper = $('<i class="fa fa-pied-piper-alt" aria-hidden="true"></i>');
var space = $('<i class="fa fa-space-shuttle" aria-hidden="true"></i>');
var cutlery = $('<i class="fa fa-cutlery" aria-hidden="true"></i>');
var camera = $('<i class="fa fa-camera-retro" aria-hidden="true"></i>');

// Define secondary FA icons to be matched
var bus2 = $('<i class="fa fa-ambulance" aria-hidden="true"></i>');
var plane2 = $('<i class="fa fa-plane" aria-hidden="true"></i>');
var bitcoin2 = $('<i class="fa fa-btc" aria-hidden="true"></i>');
var sissors2 = $('<i class="fa fa-scissors" aria-hidden="true"></i>');
var piper2 = $('<i class="fa fa-pied-piper-alt" aria-hidden="true"></i>');
var space2 = $('<i class="fa fa-space-shuttle" aria-hidden="true"></i>');
var cutlery2 = $('<i class="fa fa-cutlery" aria-hidden="true"></i>');
var camera2 = $('<i class="fa fa-camera-retro" aria-hidden="true"></i>');

// Define icons arrays
var icons = [bus, plane, bitcoin, sissors, piper, space, cutlery, camera];
var iconsTwo = [bus2, plane2, bitcoin2, sissors2, piper2, space2, cutlery2, camera2];

// Concat into 'icons'
icons = icons.concat(iconsTwo);

// Shuffles icons, then fills empty squares
shuffle(icons);
fillSquares(icons);

// Set moves and score to zero
var moves = 0;
var score = 0;

// 'Boxes' to hold clicked icons
var $clickedOne, $clickedTwo;

// Shows icon upon click event
// Inputs: user click on square
// Outputs: calls clickCounter, answerOne and answerTwo to checkAnswer
$squares.click(function(){
  clickCounter();
  // ensure icon is not already shown
  if (!$(this).children().hasClass('show')){
    // check to see if clickedOne is undefined
    if ($clickedOne === undefined) {
      // if yes, clickedOne = child i of square with class 'show'
      $clickedOne = $(this).children().addClass('show');
      // access clickedOne object, set answer = specific class
      answerOne = $($clickedOne)['0'].classList[1];
    } else {
      // else place clicked in clickedTwo
      $clickedTwo = $(this).children().addClass('show');
      // set answer to specific class
      answerTwo = $($clickedTwo)['0'].classList[1];
      // use checkAnswers to determine if match
      checkAnswers(answerOne, answerTwo);
    }
  } else {
    misClick();
  }
});

// Starts timer when first square is clicked
// Inputs: user click on square
// Outputs: time in seconds
// Define start outside of function so clearInterval can be called
var start;
$squares.click(function(){
  // begins on first clicked square
  if (moves === 1){
    // set timer = new Date
    var timer = new Date;
    // set interval counter
    start = setInterval(function(){
      // select timer html, update + 1 second
      $time.html(Math.floor((new Date - timer) / 1000) + " seconds");
    }, 1000);
  }
});

// Counts total number of moves
// Inputs: none
// Outputs: display stars
function clickCounter(){
  // add one move
  moves++;
  // display for singular move
  if (moves === 1){
    $('.moves').html(moves + " Move");
  } else {
    // subsequent moves
    $('.moves').html(moves + " Moves");
    // one star removed after 26 moves
    if (moves > 26 && moves < 32){
      $star.first().removeClass();
      // second star removed after 32 moves
    } else if (moves > 32){
      $star.last().removeClass();
    }
  }
}

// TO DO: Stars don't display correctly
// Keeps track of total score
// Inputs: none
// Outputs: alert message upon completion
function trackScore(){
  // updates time, move, and star count
  $('.fTime').html($('span.timer')[0].textContent);
  $('.fMoves').html(moves);
  $('.fStars').html($star.length);
  // adds one point to score--one for each match
  score++;
  // initiates upon eight matches
  if (score > 7){
    // updates time only once final score reached
    setTimeout(function(){
      // game-winning alert
      $('#myModal').css('display', 'block');
      $('span').click(function(){
        $('#myModal').css('display', 'none');
      });
    }, 1000);
    // stop timer
    clearInterval(start);
  }
}

// Restart button handler and logic
// Inputs: user click
// Outputs: calls shuffle and fillSquares on icons
$restart.click(function(){
  // remove 'show' class from all squares
  $('.square i').removeClass('show');
  // undefine both clickedOne and clickedTwo
  $clickedOne = undefined;
  $clickedTwo = undefined;
  // reset moves and score to 0
  moves = 0;
  score = 0;
  // reset timer
  $time.html('0 seconds');
  // then, reset interval
  clearInterval(start);
  // update 'moves' and 'stars' html
  $('.moves').html(moves + ' Moves');
  $('.score-panel .stars li i').addClass('fa fa-star');
  // reshuffle icons, then fill squares
  shuffle(icons);
  fillSquares(icons);
});

// Checks answer one against answer two to look for match
// Inputs: answerOne and answerTwo in the form of icon classes
// Outputs: calls trackScore if correct
function checkAnswers(answerOne, answerTwo){
  if (answerOne === answerTwo) {
    // return clickedOne and clickedTwo to undefined state
    $clickedOne = undefined;
    $clickedTwo = undefined;
    trackScore();
  } else {
    setTimeout(function(){
      // remove .show from clickedOne and clickedTwo
      $clickedOne.removeClass('show');
      $clickedTwo.removeClass('show');
      // return to undefined state after .show is removed
      $clickedOne = undefined;
      $clickedTwo = undefined;
    }, 500);
  }
}

// Called if player moves on the same square twice
// Inputs: none
// Outputs: alert message
function misClick(){
  alert('Please click a blank square.');
  setTimeout(function(){
    // remove .show from clickedOne
    $clickedOne.removeClass('show');
    // return to undefined state after .show is removed
    $clickedOne = undefined;
  }, 500);
}

// Takes 'icons' array as inputs using the Fisher-Yates Shuffle
// Inputs: icons array
// Outputs: shuffled array
function shuffle(arr){
  // Starter code obtained from https://stackoverflow.com/a/2450954/
  var randomIndex, temporaryValue;
  for (var i = arr.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    temporaryValue = arr[i - 1];
    arr[i - 1] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

// Fills squares with shuffled icons
// Inputs: shuffled array
// Outputs: shuffled icons array to squares
function fillSquares(arr) {
  // loops through each square
  $squares.each(function(i) {
    // places shuffled icons in squares
    $(this).append(arr[i]);
  });
}
var container = $('.container');
var squares = $('.square');


var bus = $('<i class="fa fa-ambulance hidden" aria-hidden="true"></i>');
var plane = $('<i class="fa fa-plane hidden" aria-hidden="true"></i>');
var bitcoin = $('<i class="fa fa-btc hidden" aria-hidden="true"></i>');
var sissors = $('<i class="fa fa-scissors hidden" aria-hidden="true"></i>');
var piper = $('<i class="fa fa-pied-piper-alt hidden" aria-hidden="true"></i>');
var space = $('<i class="fa fa-space-shuttle hidden" aria-hidden="true"></i>');
var cutlery = $('<i class="fa fa-cutlery hidden" aria-hidden="true"></i>');
var camera = $('<i class="fa fa-camera-retro hidden" aria-hidden="true"></i>');

var bus2 = $('<i class="fa fa-ambulance hidden" aria-hidden="true"></i>');
var plane2 = $('<i class="fa fa-plane hidden" aria-hidden="true"></i>');
var bitcoin2 = $('<i class="fa fa-btc hidden" aria-hidden="true"></i>');
var sissors2 = $('<i class="fa fa-scissors hidden" aria-hidden="true"></i>');
var piper2 = $('<i class="fa fa-pied-piper-alt hidden" aria-hidden="true"></i>');
var space2 = $('<i class="fa fa-space-shuttle hidden" aria-hidden="true"></i>');
var cutlery2 = $('<i class="fa fa-cutlery hidden" aria-hidden="true"></i>');
var camera2 = $('<i class="fa fa-camera-retro hidden" aria-hidden="true"></i>');


var icons = [bus, plane, bitcoin, sissors, piper, space, cutlery, camera, bus2, plane2, bitcoin2, sissors2, piper2, space2, cutlery2, camera2];

shuffle(icons);
fillSquares(icons);

$(function () {
  squares.click(function(){
    $(this).children().toggleClass('hidden');
  });
});


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






// Shows ALL icons
// squares.click(function(){
//   $('.square i').toggleClass('hidden');
// });









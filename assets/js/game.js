$(function() {

var win = 0;
  var lose = 0;
  var counter = 0;
  var targetNumber;


  var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
          '../assets/img/gem1.jpg',
          '../assets/img/gem2.jpg',
          '../assets/img/gem3.jpg',
          '../assets/img/gem4.jpg',];

    targetNumber = Math.floor(Math.random() * 101 ) + 19;

    $("#randomNumber").html('' + targetNumber);

    for (var i = 0; i < 4; i++) {

      var random = Math.floor(Math.random() * 11 ) + 1;

      var crystal = $("<div>");
          crystal.attr({
            "class": 'crystal',
            "data-random": random,
          });
          crystal.css({
            "background-image":"url('" + images[i] + "')",
          })

      $(".crystals").append(crystal);
    }

    $("#score").html('' + counter);

  }

resetAndStart ();

$(document).on('click', ".crystal", function () {
      
    var crystalValue = parseInt($(this).attr('data-random'));

    counter += crystalValue;

    $("#score").html('' + counter);

    if (counter === targetNumber) {
      
      win++;

      $("#wins").html('' + win);

      counter = 0;

      resetAndStart ();
    }
    else if (counter > targetNumber) {
      
      lose++;

      $("#losses").html('' + lose);

      counter = 0;

      resetAndStart ();
    }
  });
});
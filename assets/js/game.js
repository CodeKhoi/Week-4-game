$(function() {
  
  // Global variables
  var win = 0;
  var lose = 0;
  var counter = 0;
  var images;
  var random;
  var crystal;
  var targetNumber;
  var crystalValue;
  var resetAndStart;

  // Function to reset and start new game when player wins or losses
  resetAndStart = function () {

    // removes all content from the crystals element on restart so it doesn't duplicate crystals.
    $(".crystals").empty();

    images = [
          '../assets/img/gem1.jpg',
          '../assets/img/gem2.jpg',
          '../assets/img/gem3.jpg',
          '../assets/img/gem4.jpg',];

    // Sets the target number to random from 19-120 and places that target number in the DOM
    targetNumber = Math.floor(Math.random() * 101 ) + 19;

    $("#randomNumber").html('' + targetNumber);

    for (var i = 0; i < 4; i++) {
      
      // Sets crystal values from 1-12 randomly.
      random = Math.floor(Math.random() * 11 ) + 1;

        crystal = $("<div>");
          crystal.attr({
            "class": 'crystal',
            "data-random": random,
          });
          crystal.css({"background-image":"url('" + images[i] + "')",})

      $(".crystals").append(crystal);
    
    }
    // accumalates the total score on the DOM when crystals are clicked
    $("#score").html('' + counter);

  }

resetAndStart ();

// ================== EVENT DELEGATION==========================
$(document).on('click', ".crystal", function () {
      
    crystalValue = parseInt($(this).attr('data-random'));

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
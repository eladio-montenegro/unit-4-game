//variables
var wins = 0;
var loses = 0;
var counter = 0;
var targetNumber;


//crystal image arrays
var images = ["assets/images/crystalblue.jpg",
"assets/images/crystalpurple.jpg", 
"assets/images/crystalgreen.jpg", 
"assets/images/crystalred.jpg"]


//create random numbers and show them 
function randomNumber() {
    targetNumber = (Math.floor(Math.random() * 100) + 19);
       $("#number-to-guess").text(targetNumber)
       console.log(targetNumber);
   }

//radom number options 

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));
        $("#crystals").append(imageCrystal);
    }
}

randomNumber();
resetCrystals();
crystalClick();

$("#totalScore").text(counter);

function reset() {
    counter = 0;
    $("#totalScore").text(counter);
    var targetNumber = (Math.floor(Math.random() * 100) + 19);
    $("#number-to-guess").text(targetNumber);
    $("#crystals").empty();
    resetCrystals();
    crystalClick();
    randomNumber();
    console.log(randomNumner);
} 

$("#totalScore").text(counter);

//click functions for the crystals
function crystalClick() {
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#totalScore").text(counter);
    console.log(crystalValue);

    if (counter === targetNumber) {
        ++wins;
        $("#totalWins").html(wins)
        alert("You Did It!!!");
        reset ();

    }else if (counter >= targetNumber) {
        ++losses;
        $("#totallosses").html(losses)
        alert("Better Luck Next Time");
        console.log("Better Luck Next Time");
        reset();
    }
  })
};

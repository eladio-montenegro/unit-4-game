//variables that will store your wins, losses, etc
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber;


//these the location of your images.  Put them in an array so they can be given their random value
var images = ["assets/images/crystalblue.jpg",
"assets/images/crystalpurple.jpg", 
"assets/images/crystalgreen.jpg", 
"assets/images/crystalred.jpg"]


//this function creates your random number and puts it in the number to guess box
function randomNumber() {
    targetNumber = (Math.floor(Math.random() * 100) + 19);
       $("#number-to-guess").text(targetNumber)
   }

//this function generates the random number that gets assinged to your crystal images

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
} 

$("#totalScore").text(counter);

//click functions for the crystals
function crystalClick() {
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#totalScore").text(counter);

    if (counter == targetNumber) {
        ++wins;
        $("#totalWins").html(wins)
        alert("You Win!!!  Way to Go");
        reset ();

    }else if (counter >= targetNumber) {
        ++losses;
        $("#totalLosses").html(losses)
        alert("You lose.  Better Luck Next Time");
        reset();
    }
  })
};

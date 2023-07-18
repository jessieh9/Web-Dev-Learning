var buttonColors = ["red", "yellow", "green", "blue"];
var gamePattern = [];
var userPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(handleButton);


// helper functions here
function nextSequence() {
    userPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4); // selects num from 0 to 3
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);

    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}

function handleButton() {
    var colorID = $(this).attr('id');
    userPattern.push(colorID);

    $("#" + colorID).addClass("pressed");
    setTimeout(function () { $("#" + colorID).removeClass("pressed"); },
        100);
    playSound(colorID);
    checkPattern(userPattern.length - 1);

}

function checkPattern(currLevel) {
    if (gamePattern[currLevel] === userPattern[currLevel]) {
        if (gamePattern.length === userPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 800);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }

}

function playSound(color) {
    var buttonSound = new Audio("sounds/" + color + ".mp3");
    buttonSound.play();
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}


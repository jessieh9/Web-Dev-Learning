
var btns = document.querySelectorAll(".drum");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);

}

// for the button press
function handleClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown", handleKeys);

// event shows on console as KeyboardEvent {isTrusted: true, key: 'w', code: 'KeyW', location: 0, ctrlKey: false, …}
// sounds for keyboard press
function handleKeys(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);

}

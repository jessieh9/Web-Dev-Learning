// var message = prompt("Enter your message.");
// var used = message.length;

// alert("You have used " + used + " characters. You have " + 180-used + " characters left.");
// alert("Your new message is " + message.slice(0, 181));

// var name = prompt("Enter your name.");
// var newname;

// var firstLetter= name.slice(0,1).toUpperCase();
// var restOfName = name.slice(1,name.length).toLowerCase();
// newname = firstLetter + restOfName;
// alert("Hello " + newname + ", Welcome to the course.");

// var dogAge = prompt("Enter your dog's age.");
// var dogHumanAge = (dogAge - 2) * 4 + 21;
// alert("Your " + dogAge + " year old dog is "+ dogHumanAge +" years old in human age.");

function getMilk(money) {
    var costOneBottle = 1.50;
    var buyBottles = parseInt(money / 1.50);
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + buyBottles + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(5.50);

prompt("What is your name?");
prompt("What is your crush's name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
  alert("Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");
} else{
  alert("Your love score is " + loveScore + "%.");
}


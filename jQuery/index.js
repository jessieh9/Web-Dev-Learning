
// $(document).ready(function () {
//     $("h1").css("color", "red");
// })
// $("h1").css("color", "red");

// selects all buttons -- can index for specific ones i.e $("button")[0]
// $("button");

// events
// $(document).keypress(function (event) {
//     $("h1").text(event.key);
// })

$("h1").on("click", function () {
    $("h1").css("color", "purple");
    $("h1").css("font-size", "5rem");
})

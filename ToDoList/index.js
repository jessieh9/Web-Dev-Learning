import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "Decemeber"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
var mon = today.getMonth();
var dates = today.getDate();
var days = today.getDay();
var itemsList = ["Example ToDo"];
var worksList = ["Example Work"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        typeofList: "Today",
        itemList: itemsList,
        day: daysOfWeek[days],
        date: dates,
        month: months[mon - 1],
    });
});

app.get("/work", (req, res) => {
    res.render("index.ejs", {
        typeofList: "Work",
        itemList: worksList,
        day: daysOfWeek[days],
        date: dates,
        month: months[mon - 1],
    });
});

app.post("/", (req, res) => {
    if (req.body.list === "Work") {
        worksList.push(req.body["newItem"]);
        res.redirect("/work");
    } else {
        itemsList.push(req.body["newItem"]);
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
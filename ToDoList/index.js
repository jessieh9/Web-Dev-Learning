import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "Decemeber"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
var mon = today.getMonth();
var dates = today.getDate();
var days = today.getDay();
// var itemsList = ["Example ToDo"];
// var worksList = ["Example Work"];

mongoose.connect('mongodb://localhost:27017/todolistDB');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Unspecified todolist item"]
    },
    category: {
        type: String
    },
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Tidy the room.",
    category: "Today"
});

const item2 = new Item({
    name: "Buy dinner prep.",
    category: "Today"
});

const item3 = new Item({
    name: "Complete merge request.",
    category: "Work"
});

// Item.insertMany([item1, item2, item3])
//     .then(function () {
//         console.log("Successfully saved items into the DB");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    Item.find({ category: "Today" })
        .then(function (foundItems) {
            // console.log(foundItems);
            res.render("index.ejs", {
                typeofList: "Today",
                itemList: foundItems,
                day: daysOfWeek[days],
                date: dates,
                month: months[mon],
            })
        }).catch(function (err) {
            console.log(err);
        });

    // res.render("index.ejs", {
    //     typeofList: "Today",
    //     itemList: itemsList,
    //     day: daysOfWeek[days],
    //     date: dates,
    //     month: months[mon],
    // });
});

app.get("/work", (req, res) => {
    Item.find({ category: "Work" })
        .then(function (foundItems) {
            // console.log(foundItems);
            res.render("index.ejs", {
                typeofList: "Work",
                itemList: foundItems,
                day: daysOfWeek[days],
                date: dates,
                month: months[mon],
            })
        }).catch(function (err) {
            console.log(err);
        });
    // res.render("index.ejs", {
    //     typeofList: "Work",
    //     itemList: worksList,
    //     day: daysOfWeek[days],
    //     date: dates,
    //     month: months[mon],
    // });
});

app.post("/", (req, res) => {
    if (req.body.list === "Work") {
        const newPosting = new Item({
            name: req.body["newItem"],
            category: "Work",
        });
        newPosting.save();
        // worksList.push(req.body["newItem"]);
        res.redirect("/work");
    } else {
        const newPosting = new Item({
            name: req.body["newItem"],
            category: "Today",
        });
        newPosting.save();
        // itemsList.push(req.body["newItem"]);
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

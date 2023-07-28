import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import _ from "lodash";

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

mongoose.connect('mongodb+srv://admin-jessie:19762003ZHBJ05@cluster0.jd8pq12.mongodb.net/todolistDB');

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

// schema and model for custom list
const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
});

const List = mongoose.model("List", listSchema);

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
});

// dynamic routes for custom lists
app.get("/:customListName", (req, res) => {
    const customList = _.capitalize(req.params.customListName);
    List.findOne({ name: customList }).then(function (foundList) {
        if (!foundList) {
            const list = new List({
                name: customList,
                items: [item1],
            });
            list.save();
            res.redirect("/" + customList);
        } else {
            console.log("Already found the list");
            res.render("index.ejs", {
                typeofList: customList,
                itemList: foundList.items,
                day: daysOfWeek[days],
                date: dates,
                month: months[mon],
            })
        }
    }).catch(function (err) {
        console.log(err);
    })
});

app.post("/", (req, res) => {
    console.log(req.body);
    if (req.body.list === "Work") {
        const newPosting = new Item({
            name: req.body["newItem"],
            category: "Work",
        });
        newPosting.save();
        // worksList.push(req.body["newItem"]);
        res.redirect("/work");
    } else if (req.body.list === "Today") {
        const newPosting = new Item({
            name: req.body["newItem"],
            category: "Today",
        });
        newPosting.save();
        // itemsList.push(req.body["newItem"]);
        res.redirect("/");
    } else {
        // custom list
        const newPosting = new Item({
            name: req.body["newItem"],
            category: req.body.list,
        });
        List.findOne({ name: req.body.list }).then(function (foundList) {
            foundList.items.push(newPosting);
            foundList.save();
            res.redirect("/" + req.body.list);
        });
    }
});

// Tackles deletion 
app.post("/delete", (req, res) => {
    // console.log(req.body);
    const checkedItem = req.body.checked;
    Item.findByIdAndRemove(checkedItem)
        .then(function () {
            console.log(`Deleted item succesfully`);
        }).catch(function (err) {
            console.log(err);
        });

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

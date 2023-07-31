//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ejs from "ejs";
import encrypt from "mongoose-encryption";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/UserDB");
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

// encrypting with mongoose
const secret = "Mysuperverysecretverysecretsecret";
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

const User = new mongoose.model("user", userSchema);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password,
    });
    newUser.save()
        .then(function () {
            res.render("secrets");
        }).catch(function (err) {
            console.log(err);
        })
});

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.username })
        .then(function (foundUser) {
            if (foundUser.password === req.body.password) {
                res.render("secrets");
            }
        }).catch(function (err) {
            console.log(err);
        });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
//jshint esversion:6
import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ejs from "ejs";
import bcrypt from "bcrypt";
// import md5 from "md5";
// import encrypt from "mongoose-encryption";

const saltRounds = 10;
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
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });

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

app.get("/logout", (req, res) => {
    res.redirect("/");
})

app.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash,
        });
        newUser.save()
            .then(function () {
                res.render("secrets");
            }).catch(function (err) {
                console.log(err);
            })
    });
    // const newUser = new User({
    //     email: req.body.username,
    //     password: md5(req.body.password),
    // });
    // newUser.save()
    //     .then(function () {
    //         res.render("secrets");
    //     }).catch(function (err) {
    //         console.log(err);
    //     })
});

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.username })
        .then(function (foundUser) {
            bcrypt.compare(req.body.password, foundUser.password, function (err, result) {
                if (result) {
                    res.render("secrets");
                }
            });

        }).catch(function (err) {
            console.log(err);
        });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
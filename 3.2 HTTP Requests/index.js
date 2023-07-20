import express from "express";
const app = express();

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>My name is Jessie</h1>");
});

app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Contact me:</h1> <p>60019202199</p>");
});

app.listen(3000, () => {
    console.log("Running on server 3000.");
});
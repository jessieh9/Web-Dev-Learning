//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/html', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (req.body['password'] === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        // can also use res.redirect("/");
    }
});

app.listen(port, () => {
    console.log("Listening on port " + port);
})

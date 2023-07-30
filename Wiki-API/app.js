import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ejs from "ejs";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/wikiDB');
const wikiSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Article = mongoose.model("article", wikiSchema);

app.route("/articles")
    .get((req, res) => {
        Article.find()
            .then(function (foundArticles) {
                res.send(foundArticles);
            }).catch(function (err) {
                res.send(err);
            });
    }).post((req, res) => {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
        });
        newArticle.save().then(function () {
            res.send("Succesfully added a new article.");
        }).catch(function (err) {
            res.send(err);
        });
    }).delete((req, res) => {
        Article.deleteMany().then(function () {
            res.send("Succesfully deleted ALL articles.");
        }).catch(function (err) {
            res.send(err);
        });
    });

// route for specific articles
app.route("/articles/:articleTitle")
    .get((req, res) => {
        Article.findOne({ title: req.params.articleTitle })
            .then(function (foundArticle) {
                if (foundArticle) {
                    res.send(foundArticle);
                } else {
                    res.send("No articles matching that title was found.");
                }
            }).catch(function (err) {
                res.send(err);
            });
    }).put((req, res) => {
        Article.findOneAndUpdate({ title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true })
            .then(function () {
                res.send("Successfully updated article.");
            }).catch(function (err) {
                res.send(err);
            });
    }).patch((req, res) => {
        Article.findOneAndUpdate({ title: req.params.articleTitle },
            { $set: { title: req.body.title, content: req.body.content } })
            .then(function () {
                res.send("Succesfully updated article.");
            }).catch(function (err) {
                res.send(err);
            });
    }).delete((req, res) => {
        Article.deleteOne({ title: req.params.articleTitle })
            .then(function () {
                res.send("Succesfully deleted the article.");
            }).catch(function (err) {
                res.send(err);
            });
    });

// app.get("/articles", (req, res) => {
//     Article.find()
//         .then(function (foundArticles) {
//             res.send(foundArticles);
//         }).catch(function (err) {
//             res.send(err);
//         });
// });

// app.post("/articles", (req, res) => {
//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content,
//     });
//     newArticle.save().then(function () {
//         res.send("Succesfully added a new article.");
//     }).catch(function (err) {
//         res.send(err);
//     });
// });

// app.delete("/articles", (req, res) => {
//     Article.deleteMany().then(function () {
//         res.send("Succesfully deleted ALL articles.");
//     }).catch(function (err) {
//         res.send(err);
//     });
// });

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
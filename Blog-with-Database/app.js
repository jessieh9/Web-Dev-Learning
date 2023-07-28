//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');

const homeStartingContent = "This is a short project that imitates a daily journal. It has basic functionality where navigating to the /compose page will allow the user to post a title and content about the day which will then redirect them back to the home page with the updated post. Each post is shortened to 100 words but the entire post can be accessed by clicking on 'Read More'. The navbar has an about page and contact page and the footer still needs to be fixed so that it is stored all the way at the bottom of the page and not floating (issue is relative/absolute - relative will put it relative to the length of the container while absolute has it overaly on top of text). Overall super cute and fun <3";
const aboutContent = "Hi besties, I'm an upcoming junior at the University of California, Irvine majoring in Computer Science with a specialization in Information. I enjoy learning new skills that'll get me into FAANG and I'm currently learning frameworks and languages for full stack development. I also plan to look into research for security and privacy as well. Outside of my major, I enjoy mentoring and participating in activities where I get to create new friendships and communities amongst people. I enjoy being able to share experiences, connect with different people, and exchange ideas. Additionally, I like to play basketball, listen to music, and binge watch videos about the million-and-pne controversies on the Earth.";
const contactContent = "If you've liked me so much so far and want to get in touch with me, you can feel free to shoot me an email at swaggyroach23@gmail.com or pull up to UCI's campus where I'll give you a free tour as an unlicensed campus tour guide and maybe free boba or something but definitely hit me up if you like web dev or any other technology because I need more girlies who're into tech and want to make the new Facebook with me <3. If you can't reach me at my email, just Google me and do your best to find me because if you really wanted to, you would besties.";

mongoose.connect('mongodb://localhost:27017/BlogDB');

const app = express();
const blogSchema = new mongoose.Schema({
  postTitle: String,
  postBody: String,
});

const Post = mongoose.model("Post", blogSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var posts = [];

app.get("/", (req, res) => {
  Post.find()
    .then(function (foundPosts) {
      res.render("home.ejs",
        {
          content: homeStartingContent,
          journal: foundPosts,
        });
    }).catch(function (err) {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.render("about.ejs",
    { content: aboutContent },);
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs",
    { content: contactContent },);
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
  const post = new Post({
    postTitle: req.body.title,
    postBody: req.body.newPost,
  });
  post.save().then(function () {
    res.redirect("/");
  }).catch(function (err) {
    ;
  });

});

app.get("/posts/:postID", (req, res) => {
  const requestedPostID = req.params.postID;
  Post.findOne({ _id: requestedPostID })
    .then(function (foundPosts) { 
      res.render("post.ejs", {
        title: foundPosts.postTitle,
        content: foundPosts.postBody
      });
    }).catch(function (err) {
      console.log(err);
    });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});


// db.products.insertOne({
//   _id: 2,
//   name: "Pencil",
//   price: 0.80,
//   stock: 12,
//   reviews: [
//     { authorname: "CENA", rating: 3, review: "Phattest Pencil!" }, {
//       authorname: "Walley", rating: 5, review: "Scratchy scritch yurrr!"
//     }
//   ]
// })
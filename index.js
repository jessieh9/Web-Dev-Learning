import express from "express";
const app = express();

// including this so we can get resources from the server
// the forward slash (/) for get is the home page
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// listen specifies port and callback which is triggered when server is setup
app.listen(3000, () => {
    console.log("Server running on port 3000.");
});

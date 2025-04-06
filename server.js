// Loads the express module
const express = require("express");
const hbs = require("hbs");

const bodyParser = require("body-parser");

const path = require("path");

//Creates our express server
const app = express();
const port = 3001;

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route

// Render the initial page with the number input form
app.get("/", (req, res) => {
  res.render("index");
});

// Create express route binder for draw.hbs and get the data from the url as parameters
// that came from index.hbs

app.post("/happy", (req, res) => {
  const nickname = req.body.nickname;
  const invitees = Array.isArray(req.body.invitees) ? req.body.invitees.filter(name => name.trim() !== "") : [];

  let songLines = [];

  invitees.forEach((name) => {
    songLines.push(`${invitees}: Happy Birthday`)
  });

  songLines.push(`Test`);

  res.render("happy", { nickname, songLines });
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

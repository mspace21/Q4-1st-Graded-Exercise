// Loads the express module
const express = require("express");
const hbs = require("hbs");

hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});
// registering a JSON helper
// allows adding a JS array directly in the hbs (front end) file

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
  const numInvitees = req.body.number;
  const guestsData = req.body.guestsData;
  const gender = req.body.gender;

  const guestList = JSON.parse(guestsData);
  // tentative list of guests / invitees

  const guests = [];
  // only considers guests who are going
  for(let i = 0; i < guestList.length; i++){
    if(guestList[i].going === true){
      guests.push(guestList[i].name);
    }
  }

  console.log(guests);

  res.render("happy", { nickname, numInvitees, guests, gender });
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

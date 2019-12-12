var express = require("express");
const cors = require("cors");
var passport = require("passport");
var Strategy = require("passport-github").Strategy;
const path = require("path")

passport.use(
  new Strategy(
    {
      clientID: "1653a45ef46f3724b948",
      clientSecret: "125f5e9b9b913f6b7b2209dc6a68bcadae726420",
      callbackURL: "http://localhost:8080/user/signin/cb"
    },
    function(accessToken, refreshToken, profile, cb) {
      // In this example, the user's Facebook profile is supplied as the user
      // record.  In a production-quality application, the Facebook profile should
      // be associated with a user record in the application's database, which
      // allows for account linking and authentication with other identity
      // providers.
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Models
const notes = require("./db/notes");
var app = express();

// Middleware

app.use(cors());
app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// API calls!

app.get("/login/github", passport.authenticate("github"));

app.get(
  "/user/signin/cb",
  passport.authenticate("github", { failureRedirect: "/404" }),
  function(req, res) {
    const gitUser = JSON.parse(res.req.user._raw);
    console.log(gitUser);
    res.redirect("/success");
  }
);

app.get("/notes", (req, res) => {
  notes.getAll().then(notes => {
    res.json(notes);
  });
});

app.get("/notes/:category", (req, res) => {
  notes.getCategoryNotes(req.params.category).then(notes => {
    res.json(notes);
  });
});

app.post("/notes", (req, res) => {
  // console.log(req.body);
  notes
    .create(req.body)
    .then(note => {
      res.json(note);
    })
    .catch(error => {
      res.status(500);
      res.json(error);
    });
});

app.put("/notes/:id", (req, res) => {
  // console.log(req.body);
  notes
    .updateNote(req.params.id, req.body.newContent)
    .then(note => {
      res.json(note);
    })
    .catch(error => {
      res.status(500);
      res.json(error);
    });
});

app.delete("/notes/:id", (req, res) => {
  notes
    .deleteMe(req.params.id)
    .then(note => {
      res.json(note);
    })
    .catch(error => {
      res.json(error);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`You know what time it is: ${port}`);
});

/**
    Run with npm start

    Whenever this file changes, you must stop and restart the server to pick up changes:
        Type Ctrl-C to stop, then type npm start to restart.
*/
var nunjucks = require("nunjucks");
var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));  // For our CSS, images, and Javascript

// Use nunjucks (a templating language) to render views in case we ever want
// something more fancy than plain HTML.
// See http://stackoverflow.com/questions/19912389/how-to-use-html-in-express-framework-with-nunjucks-no-jade for examples
nunjucks.configure("views", {
  // Do some configuration
  autoescape: true,
  watch: true,
  nocache: true,
  express: app
});

app.get("/", function(request, response) {
  response.render("index.html");
});

// We can name parameters by using a colon :
// The parameter names get filled in on the request under request.params.
app.get("/:filename.html", function(request, response) {
  response.render(request.params.filename + ".html");
});

app.listen(app.get("port"), function() {
  console.log("We're up and running! Open localhost:" + app.get("port") + " in your browser." +
    "\nBe sure to stop (Ctrl-C) and rerun this command whenever you add new files or change the index.js code.");
});

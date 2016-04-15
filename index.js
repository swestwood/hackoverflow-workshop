/**
	Run with npm start
	
	Whenever this file changes, you must stop and restart the server to pick up changes:
		Type Cmd-C (or Ctrl-C) to stop, then type npm start to restart.
*/
var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(request, response) {
  response.render("pages/index.html");
});

// We can name parameters by using a colon :
// The parameter names get filled in on the request under request.params.
app.get("/:filename", function(request, response) {
  response.render("pages/" + request.params.filename + ".html");
});

app.listen(app.get("port"), function() {
  console.log("We're up and running! Open localhost:" + app.get("port") + " in your browser." +
  	"\nBe sure to stop (Cmd-C or Ctrl-C) and rerun this command whenever you add new files or change the index.js code.");
});

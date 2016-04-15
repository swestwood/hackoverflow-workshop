"""
	Run with npm start
	
	Whenever this file changes, you must stop and restart the server to pick up changes:
		Type Cmd-C (or Ctrl-C) to stop, then type npm start to restart.
"""
var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(request, response) {
  response.render("pages/index");
});

app.listen(app.get("port"), function() {
  console.log("We're up and running! Open localhost:" + app.get("port") + " in your browser.");
});



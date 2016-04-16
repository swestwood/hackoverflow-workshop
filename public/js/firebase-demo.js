
// Replace with your own from https://www.firebase.com/account/#/
FIREBASE_APP = "shining-inferno-8384";

// See https://www.firebase.com/docs/web/guide/retrieving-data.html and
// https://www.firebase.com/docs/web/guide/saving-data.html for more!

/* Chat room code */
// Modified from https://www.firebase.com/tutorial/#gettingstarted

var messagesRef = new Firebase("https://" + FIREBASE_APP + ".firebaseio.com/chatroom/messages");
ENTER_KEYCODE = 13;  // Defined by the Powers That Be for the entire internet

$(".message-input").keypress(function (e) {
  // Send a message!
  if (e.keyCode == ENTER_KEYCODE) {
    var username = $(".name-input").val();
    var message = $(".message-input").val();

    // Save data to Firebase
    messagesRef.push({name: username, text: message, color: "orange"});
    // Empty the input since it is now submitted
    $(".message-input").val("");
  }
});

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  // Triggered for each incoming chat messages
  // Get data
  var data = snapshot.val();
  var username = data.name || "anonymous";
  var message = data.text;
  var color = data.color || "green";
  // Render the messages
  var messageElem = $("<li class='chat-message'>");
  var nameElem = $("<span class='chat-username' style='color: " + color + "'></span> ");
  nameElem.text(username + ":");
  messageElem.text(message).prepend(nameElem);

  var messageList = $(".message-list");
  messageList.append(messageElem)

  // Scroll to bottom of the message list
  messageList[0].scrollTop = messageList[0].scrollHeight;
});


/* Hit counter code */

var hitCounterRef = new Firebase("https://" + FIREBASE_APP + ".firebaseio.com/hitCounter");

$(".counter-button").click(function(e) {
  // Update the counter
  var currValue = parseInt($(".counter-hits").text());
  hitCounterRef.set({"count": currValue += 1});
});

hitCounterRef.on("value", function(snapshot) {
  // Receive a value from Firebase
  $(".counter-hits").text(snapshot.val().count);
});

/* Moveable rectangle */

var rectangleRef = new Firebase("https://" + FIREBASE_APP + ".firebaseio.com/rectangle");

$(".rectangle-container").mousedown(function(e) {
  // Update the counter
  rectangleRef.set({"x": e.pageX, y: e.pageY});
});

rectangleRef.on("value", function(snapshot) {
  // Receive a value from Firebase
  var data = snapshot.val();
  $(".rectangle").css("left", data.x);
  $(".rectangle").css("top", data.y);
});


$(document).ready(function() {
	console.log("Ready!");
});


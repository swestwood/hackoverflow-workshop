// Modified from https://www.firebase.com/tutorial/#gettingstarted

// Replace with your own from https://www.firebase.com/account/#/
FIREBASE_APP = "shining-inferno-8384";

// See https://www.firebase.com/docs/web/guide/retrieving-data.html
// and https://www.firebase.com/docs/web/guide/saving-data.html
// for more!
var firebase = new Firebase("https://" + FIREBASE_APP + ".firebaseio.com/");

ENTER_KEYCODE = 13;

// Send a message!
$(".message-input").keypress(function (e) {
  if (e.keyCode == ENTER_KEYCODE) {
    var username = $(".name-input").val();
    var message = $(".message-input").val();

    // Save data to Firebase
    firebase.push({name: username, text: message});
    // Empty the input since it is now submitted
    $(".message-input").val("");
  }
});

// Add a callback that is triggered for each chat message.
firebase.limitToLast(10).on('child_added', function (snapshot) {
  // Get data
  var data = snapshot.val();
  var username = data.name || "anonymous";
  var message = data.text;

  // Render the messages
  var messageElem = $("<li class='chat-message'>");
  var nameElem = $("<span class='chat-username'></span> ")
  nameElem.text(username + ":");
  messageElem.text(message).prepend(nameElem);

  var messageList = $(".message-list");
  messageList.append(messageElem)

  // Scroll to bottom of the message list
  messageList[0].scrollTop = messageList[0].scrollHeight;
});

$(document).ready(function() {
	console.log("Ready!");
});


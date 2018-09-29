// Initialize Firebase

var config = {
  apiKey: "AIzaSyDxZ1HlsQYpkctf-DadU7DxeL_b1nVYrNQ",
  authDomain: "fir-db-1df80.firebaseapp.com",
  databaseURL: "https://fir-db-1df80.firebaseio.com",
  projectId: "fir-db-1df80",
  storageBucket: "fir-db-1df80.appspot.com",
  messagingSenderId: "21291710553"
};
firebase.initializeApp(config);

var database = firebase.database();

// INSERT INITIAL VALUES HERE

var connectionsRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {

  if (snap.val()) {

    var con = connectionsRef.push(true);

    con.onDisconnect().remove();
  }
});

$ ( "#submit-btn" ) .on ( "click" , function () {

  var name = $("#name-input-fb").val().trim();
  var role = $("#role-input-fb").val().trim();

  event.preventDefault();
  console.log ( "i hear ya!" ) ;

    database.ref().push({
      name: name,
      role: role
    });

} ) ;
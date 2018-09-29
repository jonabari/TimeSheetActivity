// Initialize Firebase

var config = {
  apiKey: "AIzaSyB2PboQKra15gjJtnLEj4glatLMgIqKjYA",
  authDomain: "timesheettest-c2a03.firebaseapp.com",
  databaseURL: "https://timesheettest-c2a03.firebaseio.com",
  projectId: "timesheettest-c2a03",
  storageBucket: "timesheettest-c2a03.appspot.com",
  messagingSenderId: "380836156870"
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

  var name = $ ( "#name-input-fb" ) .val() .trim() ;
  var role = $ ( "#role-input-fb" ) .val() .trim() ;
  var time = $ ( "#time-input-fb" ) .val() .trim() ;
  var freq = $ ( "#frequency-input-fb" ) .val() .trim() ;


  event.preventDefault();
  console.log ( "i hear ya!" ) ;

    database.ref().push({
      name: name,
      role: role,
      time: time,
      freq: freq
    });


} ) ;
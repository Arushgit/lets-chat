//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCbG3QweGb23PzKKZgoNnvu_MluDTM0V6M",
      authDomain: "kwitter-f58be.firebaseapp.com",
      databaseURL: "https://kwitter-f58be-default-rtdb.firebaseio.com",
      projectId: "kwitter-f58be",
      storageBucket: "kwitter-f58be.appspot.com",
      messagingSenderId: "83897536316",
      appId: "1:83897536316:web:717d68647ac6684c535839"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send() {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  });
  document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
namewithtag="<h4>" + name + "<img src='tick.png' class='user_tick'> </h4>";
messagewithtag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>likes: " + like + "</span> </button> <hr>";
row=namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
    function updatelike(message_id) {
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(room_name).child(message_id).update({
      like:updatedlikes
      });
    }

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
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  function addroom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
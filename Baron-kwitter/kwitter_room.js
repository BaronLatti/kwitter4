
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCk5TZ2hwuMKNP2cSPvuBfPiz9ZFBRzfa0",
    authDomain: "kwitter-25b37.firebaseapp.com",
    databaseURL: "https://kwitter-25b37-default-rtdb.firebaseio.com",
    projectId: "kwitter-25b37",
    storageBucket: "kwitter-25b37.appspot.com",
    messagingSenderId: "645139865054",
    appId: "1:645139865054:web:29f15cf1721ef86ae1514f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +  user_name + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName (this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("outpot").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

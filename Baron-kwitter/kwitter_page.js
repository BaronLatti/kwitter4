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

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;  
  console.log(updated_likes);

  firebase.database().ref(room_name).childKey(message_id).updateLike({
    like : updated_likes
  });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console .log(message_data);
        name = message_data['like'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4> "+name +"<img class='user_tick' src ='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +"</span></button>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><br>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}

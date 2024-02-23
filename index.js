
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getDatabase, 
    ref, 
    onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAePbj7e0XYe9i8zc3Szjb8tkjJeG5Zp5E",
    authDomain: "testfirebase-3a670.firebaseapp.com",
    projectId: "testfirebase-3a670",
    storageBucket: "testfirebase-3a670.appspot.com",
    messagingSenderId: "87277104760",
    appId: "1:87277104760:web:b97cf9b2a54c95a296c78d"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, "/messages");

onValue(
  messages,
  (snapshot) => {
    console.log(snapshot);

    const ul = document.getElementById("messages");
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {

    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();  
    console.log(childKey);
    console.log(childData);

      

      const text = document.createTextNode(childData.message);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
                 
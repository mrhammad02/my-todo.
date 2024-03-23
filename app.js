// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js'

// import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js'


//   const firebaseConfig = {
//     apiKey: "AIzaSyAUcy7UloHbKI3zRv3MfBMMjS7I4Gqcsok",
//     authDomain: "new-todo-22bbf.firebaseapp.com",
//     projectId: "new-todo-22bbf",
//     storageBucket: "new-todo-22bbf.appspot.com",
//     messagingSenderId: "903946334839",
//     appId: "1:903946334839:web:d7adf3d28159d732e10c72",
//     measurementId: "G-2W4E387GCZ"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app)


// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  import { getAnalytics, } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAUcy7UloHbKI3zRv3MfBMMjS7I4Gqcsok",
    authDomain: "new-todo-22bbf.firebaseapp.com",
    databaseURL: "https://new-todo-22bbf-default-rtdb.firebaseio.com",
    projectId: "new-todo-22bbf",
    storageBucket: "new-todo-22bbf.appspot.com",
    messagingSenderId: "903946334839",
    appId: "1:903946334839:web:d7adf3d28159d732e10c72",
    measurementId: "G-2W4E387GCZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)


var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var Login = document.getElementById('Login');



window.abc = function(e){
  e.preventDefault();
    var obj = {
        text:username.value,
        text:password.value,
        text:email.value,
        text:Login.value
    }
    
    console.log(username.value,password.value,email.value,Login.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user",user)
    // window.locations = function(){
    //   window.location="todoapp/index1.html"
    // }
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage",errorMessage)
  });

  window.location="todoapp/index1.html"
}

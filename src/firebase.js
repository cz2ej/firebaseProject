import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQi10xBs4rIdTytph6IdQfCo0-OJvSctM",
    authDomain: "launch-week2-project.firebaseapp.com",
    databaseURL: "https://launch-week2-project.firebaseio.com",
    projectId: "launch-week2-project",
    storageBucket: "launch-week2-project.appspot.com",
    messagingSenderId: "435566512696",
    appId: "1:435566512696:web:20d034e7b7744916"
  };

firebaseConfig.initializeApp(firebaseConfig);

export default firebase;

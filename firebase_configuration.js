// Firebase Initialization & Configuration for WebKrafta
const firebaseConfig = {
  apiKey: "AIzaSyBa49TlTTEmhEMrBy5v_lmOB9X2NO_8aNc",
  authDomain: "webkrafta-6239f.firebaseapp.com",
  databaseURL: "https://webkrafta-6239f-default-rtdb.firebaseio.com",
  projectId: "webkrafta-6239f",
  storageBucket: "webkrafta-6239f.firebasestorage.app",
  messagingSenderId: "119327138062",
  appId: "1:119327138062:web:48cdb7eaa26cd891ed775f",
  measurementId: "G-C1V30E605N"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();
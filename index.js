// const timeDisplay = document.querySelector("#timeDisplay");
function timer(timeInMinutes) {
  timeDisplay.style.visibility = "visible";
  let seconds = 0;
  let minutes = 0;
  let totalSeconds = 0;
  let milliseconds = 0;
  let string;
  const timeId = setInterval(() => {
    if (totalSeconds == timeInMinutes * 60) clearInterval(timeId);
    if (milliseconds % 100 == 0) {
      seconds++;
      totalSeconds++;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes < 10) string = `0${minutes}`;
    else {
      string = `${minutes}`;
    }
    if (seconds < 10) string += `:0${seconds}`;
    else {
      string += `:${seconds}`;
    }
    if (milliseconds < 10) string += `:0${milliseconds}`;
    else {
      string += `:${milliseconds}`;
    }
    timeDisplay.innerText = string;
    milliseconds++;
  }, 10);
}
// document.querySelector("#minutesSubmit").addEventListener("click", (event) => {
//   event.preventDefault();
//   timer(Number(document.querySelector("#minutes").value));
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBafYoI3ZdpH-zNlB9XKWS0GBckPO8q-Sc",
  authDomain: "chatapp-c6a0c.firebaseapp.com",
  projectId: "chatapp-c6a0c",
  storageBucket: "chatapp-c6a0c.appspot.com",
  messagingSenderId: "341695695565",
  appId: "1:341695695565:web:da6abe1c08b9e936ebb784",
  measurementId: "G-21S49QZWK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function sendData(msg) {
  try {
    const docRef = await addDoc(collection(db, "Gaming"), {
      message: msg,
    });
    return docRef;
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
}

async function getData() {
  const querySnapshot = await getDocs(collection(db, "Gaming"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  return querySnapshot;
}

document.querySelector("#sendMsg").addEventListener("click", (event) => {
  event.preventDefault();
  const msg = document.querySelector("#msg").value;
  sendData(msg)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

document.querySelector("#readData").addEventListener("click", (event) => {
  event.preventDefault();
  getData().then(data=>{
      data.forEach((doc) => {
      console.log(doc.data().message); // Retreiving all messages
    });
  }).catch(error=>{
    console.log(error)
  })
  
});

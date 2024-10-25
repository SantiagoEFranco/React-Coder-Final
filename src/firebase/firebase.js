// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz8a9_9xVrLIz-9figqG1bOyeQYebUI-8",
  authDomain: "rpmtienda-4669a.firebaseapp.com",
  projectId: "rpmtienda-4669a",
  storageBucket: "rpmtienda-4669a.appspot.com",
  messagingSenderId: "926916530961",
  appId: "1:926916530961:web:5e11468a034f763c42b2b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//accede a la base de datos de firebase (donde estan las colecciones)
const db = getFirestore(app);
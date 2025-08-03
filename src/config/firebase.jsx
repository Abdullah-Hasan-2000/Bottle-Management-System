import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd2QORbM3I6Vjtm0UhG1Emwb3GGl_MTpc",
  authDomain: "bottle-management-system.firebaseapp.com",
  projectId: "bottle-management-system",
  storageBucket: "bottle-management-system.firebasestorage.app",
  messagingSenderId: "637738298815",
  appId: "1:637738298815:web:20a234f27c46ef5791c50a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
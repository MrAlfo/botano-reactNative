import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyBbGgxUQdQhGBOjk56N8TvYFqephTL97ys",
  authDomain: "botano-react.firebaseapp.com",
  projectId: "botano-react",
  storageBucket: "botano-react.appspot.com",
  messagingSenderId: "330620039810",
  appId: "1:330620039810:web:b8324ac9f2c40480493a9b",
  measurementId: "G-K9NN44C1QJ",
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

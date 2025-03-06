import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-6gAf4__SU0wxPQ0Iu3KQZHzy_H1abs",
  authDomain: "h2t-landing-page.firebaseapp.com",
  projectId: "h2t-landing-page",
  storageBucket: "h2t-landing-page.firebasestorage.app",
  messagingSenderId: "361648021013",
  appId: "1:361648021013:web:04db1c37588871b0e8781c",
  measurementId: "G-3KZ75T2MYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

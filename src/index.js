import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './css/style.css';
import App from './app';
import firebase from 'firebase/app';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC0gw9ilydBXOvGoERa6Uqtnd9vMO4Je1M",
    authDomain: "real-react.firebaseapp.com",
    projectId: "real-react",
    storageBucket: "real-react.appspot.com",
    messagingSenderId: "667057650830",
    appId: "1:667057650830:web:5cd80a404f6acbf9bf9ddf",
    measurementId: "G-V5DNCSKR93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
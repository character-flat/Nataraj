// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCBdxYZiuOv6lGl2JUVBb6XVjzQjnQ6aW8",
//   authDomain: "natarajaschool.firebaseapp.com",
//   projectId: "natarajaschool",
//   storageBucket: "natarajaschool.appspot.com",
//   messagingSenderId: "289317485881",
//   appId: "1:289317485881:web:5490b1404c2ed6df4abce8",
//   measurementId: "G-RWPH332FF4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import App from './App.jsx'
import  React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
//import ReactDOM from 'react-dom';
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

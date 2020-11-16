import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQlLfeBBc8RRtyiB4pqfPar70Il43PFPQ",
  authDomain: "admin-portal-6a8fa.firebaseapp.com",
  databaseURL: "https://admin-portal-6a8fa.firebaseio.com",
  projectId: "admin-portal-6a8fa",
  storageBucket: "admin-portal-6a8fa.appspot.com",
  messagingSenderId: "457567820922",
  appId: "1:457567820922:web:ed6bd847858b268cd42fc3",
  measurementId: "G-VHWSXMZWFB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
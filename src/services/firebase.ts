import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyD2DuxpKbj9xhfAUWzsUXtHY5lgdudp4Vc",
  authDomain: "aula-react-1c27c.firebaseapp.com",
  databaseURL: "https://aula-react-1c27c-default-rtdb.firebaseio.com",
  projectId: "aula-react-1c27c",
  storageBucket: "aula-react-1c27c.appspot.com",
  messagingSenderId: "218307232756",
  appId: "1:218307232756:web:a9305f039893983e47efa1"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();



